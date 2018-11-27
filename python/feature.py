import math
import json

def merge_two_dicts(x, y):
    z = x.copy()   # start with x's keys and values
    z.update(y)    # modifies z with y's keys and values & returns None
    return z

class SimpleTransformerMixin:
    """
    A lighter version of the scikit-learn pipeline variant

    We shall add "get_config" method, as in Keras layers
    to pull out how we extract and export information
    """
    def fit(self, X, y=None):
        return self
    
    def transform(self, X):
        return X
    
    def fit_transform(self, X, y=None):
        self.fit(X, y)
        return self.transform(X)
    
    def update_base_config(self, base_config={}):
        try:
            self.base_config = merge_two_dicts(self.base_config, base_config)
        except:
            self.base_config = base_config
    
    def update_all_(self, config):
        for key in config:
            setattr(self, key, config[key])

    def get_config(self):
        return {}
    
    def export(self, path=None):
        """
        export pipeline somehow (probably to json files, so that
        it can be importable via javascript)
        """
        # if path is None: Raise Exception...
        with open(path, 'w') as f:
            conf = self.get_config()
            f.write(json.dumps(conf))
    
    def load(self, path=None):
        """
        load pipeline somehow
        """
        # if path is None: Raise Exception...
        with open(path, 'r') as f:
            config = json.loads(f.read())
        self.update_all_(config)


class Pipeline(SimpleTransformerMixin):
    def __init__(self, steps=[], verbose=False):
        self.steps = steps
        self.verbose = verbose
    
    def fit(self, X, y=None):
        base_config = {}
        update_steps = []
        for tmx in self.steps:
            if self.verbose:
                print("\tTraining {}...".format(tmx.__class__.__name__))
            tmx.update_base_config(base_config)
            tmp_ = tmx.fit(X, y)
            base_config = tmp_.get_config()
            update_steps.append(tmp_)
            if self.verbose:
                print("\tTransforming {}...".format(tmx.__class__.__name__))
            X = tmx.transform(X)
        self.steps = update_steps
        return self
    
    def transform(self, X):
        for tmx in self.steps:
            X = tmx.transform(X)
        return X
    
    def load_export_(self, path, mode='export'):
        # if path is None: Raise Exception...
        # this will automatically prepend the name of the things to dump
        # later iterations will clean this up so it is a single json file rather
        # than multipe...
        if "/" in path:
            folder_fname = path.rsplit("/", 1)
        elif "\\" in path:
            folder_fname = path.rsplit("\\", 1)
        else:
            folder_fname = path.rsplit("/", 1)
        folder_dir = "" if len(folder_fname) == 1 else folder_fname[0]
        basename = folder_fname[0] if len(folder_fname) == 1 else folder_fname[1]
        for tmx in self.steps:
            fname = tmx.__class__.__name__ + basename
            full_path = fname if folder_dir == "" else folder_dir+"/"+fname
            if mode == 'export':
                tmx.export(full_path)
            elif mode == 'load':
                tmx.load(full_path)
            else:
                # should never get here
                pass

    def load(self, path):
        self.load_export_(path, mode='load')
    
    def export(self, path):
        self.load_export_(path, mode='export')

class TextCleaner(SimpleTransformerMixin):
    def transform(self, X):
        """
        does some basic text cleaning

        Usage:
        tc = TextCleaner()
        tc.transform(["Hello? World!"])
        """
        import re
        def cleaner(string):
            string = re.sub(r"[^a-zA-Z0-9\s]+", "", string)
            return string
        X = [cleaner(x) for x in X]
        return X

class BagOfWords(SimpleTransformerMixin):
    """
    Implements TF-IDF algorithm for scaling text. 
    This implementation uses the tfidf smooth variant
    to protect against divide by 0 errors, n.b. this is not the typical
    one; we use this for ease of reimplementation

    Usage:
    X = ['one two three', 'four five six']
    fp = FeaturePipeline()
    fp.fit_transform(X)
    """
    def __init__(self, word_dict={}, idf=None, top_k=None, base_config={}, max_words=None):
        self.word_dict = word_dict
        self.max_words = len(self.word_dict)+1 if max_words is None else max_words
        self.idf = idf
        self.top_k = top_k
        self.base_config = base_config

    def fit(self, X, y=None):
        # this learns all words and set index...
        total_docs = len(X)
        words = [x.lower().split() for x in X]
        words_flatten = [y for x in words for y in x]
        word_set = list(set(words_flatten))

        # normalize based on word that appears the most...
        counter = {}
        idf = {}
        for wd in word_set:
            idf_ = math.log((float(total_docs)/(1+len([1 for x in words if wd in x]))))
            if idf_ > 0:
                counter[wd] = len([1 for x in words_flatten if x == wd])
                idf[wd] = idf_

        max_words = len(word_set)

        if self.top_k is not None:
            # filter idf dictionary by top values...
            # we avoid using itemgetter or items, simply for portability...
            # to be checked later in transcrypt
            idf_vals = [idf[x] for x in idf]
            idf_vals = sorted(idf_vals, reverse=True)[:self.top_k]
            min_vals = min(idf_vals) if len(idf_vals) > 0 else 1.0
            idf = {x:idf[x] for x in idf if idf[x] >= min_vals}

        # need this to preserve ordering...
        self.word_dict = {word:idx for idx, word in enumerate(idf)}
        self.max_words = max_words
        self.idf = idf
        return self
    
    def transform(self, X):
        def transform_sentence(sent):
            words = sent.lower().split()
            max_word_score = max([self.word_dict[x] for x in self.word_dict]) if len(self.word_dict) > 0 else 1.0
            word_index = {x:self.word_dict.get(x, None) for x in words if self.word_dict.get(x, None) is not None}
            # build the counter...
            # tfidf does do a counter, just 1, 0 for "term frequency"
            word_set = set(word_index)
            word_dict = {}
            for word in word_set:
                if word is None:
                    continue
                #tf = 0.5 + 0.5*(len([x for x in word_index if x == word])/self.max_norm) # tf augmented freq
                f_term = len([x for x in word_index if x == word])
                tf = f_term * self.idf[word]
                if self.idf is not None:
                    # apply idf normalization
                    idf_ = 0.5+(0.5*(f_term/max_word_score))
                    tf = tf * idf_ * self.idf[word]
                word_dict[word] = tf
            
            # returns sparse output which is {matrix index:tfidf value}
            return {self.word_dict[x]:word_dict[x] for x in word_dict}
        
        def dict_to_list(sparse_dict):
            # something soemthing use decorators
            word_list = [0 for x in range(self.max_words)]
            for x in sparse_dict:
                word_list[x] = sparse_dict[x]
            return word_list
        sparse_out = [dict_to_list(transform_sentence(x)) for x in X]
        return sparse_out

    def get_config(self):
        new_config = {
            'word_dict': self.word_dict,
            'max_words': self.max_words,
            'idf': self.idf,
            'top_k': self.top_k
        }
        return new_config

class FilterColumns(SimpleTransformerMixin):
    """
    Filter columns which are to be dropped...
    has to be pre-trained to know what it is to drop...
    This allows rule sets to be added to the pipeline
    """
    def __init__(self, words=[], columns=[], base_config={}):
        self.base_config = base_config #kwargs.get('base_config', {})
        self.columns = columns # kwargs.get('columns', [])
        self.words = words #kwargs.get('words', [])
        self.update_column(words)
    
    def fit(self, X, y=None):
        self.update_column(self.words)
        return self
    
    def transform(self, X):
        if len(self.columns) == 0:
            return X
        
        def filter_columns(x):
            return [val for indx, val in enumerate(x) if indx not in self.columns]
        return [filter_columns(x) for x in X]
    
    def update_column(self, words):
        self.words = words
        word_dict = self.base_config.get('word_dict', {})
        column_index = []
        for word in words:
            indx = word_dict.get(word, None)
            if indx is None:
                continue
            column_index.append(indx)
        self.columns = column_index
    
    def get_config(self, update_base=False):
        new_config = {
            'columns': self.columns,
            'words': self.words
        }
        if update_base:
            return merge_two_dicts(self.base_config, new_config)
        else:
            return new_config

if __name__ == "__main__":
    X = ['one two three', 'four five six']
    bow = BagOfWords()
    X_trans = bow.fit_transform(X)

    fc = FilterColumns(['one'])
    pipeline = Pipeline(steps=[bow, fc])
    X_trans = pipeline.fit_transform(X)
