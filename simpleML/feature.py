#from sklearn.base import TransformerMixin

def merge_two_dicts(x, y):
    # should really use copy - but we can't do that here...with javascript
    z = {i:i[j] for i in x}   # start with x's keys and values
    z.update(y)    # modifies z with y's keys and values & returns None
    return z

class TransformerMixin:
    def fit(self, X, y=None):
        return self
    def transform(self, X):
        return X
    def fit_transform(self, X, y=None):
        self.fit(X, y)
        return self.transform(X)
    def get_config(self):
        return {}

class TextCleaner(TransformerMixin):
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

class CountVectorizer(TransformerMixin):
    def __init__(self, vocab=[]):
        self.vocab = vocab
    
    def fit(self, X, y=None, refit=True):
        if len(self.vocab) > 0 and not refit:
            return self
        words = [x.lower().split() for x in X]
        words_flatten = [y for x in words for y in x]
        word_set = list(set(words_flatten))
        self.vocab = word_set
        return self
    
    def transform(self, X):
        words = [x.lower().split() for x in X]
        list_len = len(self.vocab)
        # build a sparse matrix...
        def words_to_vec(word_list):
            array = [0 for _ in range(list_len)]
            for idx, wd in enumerate(self.vocab):
                counter = len([1 for x in word_list if x == wd])
                if counter > 0:
                    array[idx] = counter
            return array
        return [words_to_vec(x) for x in words]
    
    def get_config(self):
        return {'vocab': self.vocab}

class OneHotEncoder(TransformerMixin):
    def __init__(self, categories={}, handle_unknown='ignore'):
        self.categories = categories
        self.handle_unknown = handle_unknown # only handles ignore right now...
    
    def fit(self, X, y=None):
        # learns the categories, 
        # adhering to the same pattern, we'll put it as a 
        # list of lists...
        categories_ = []
        num_cols = len(X[0])
        for idx in range(num_cols):
            cat_set = list(set([x[idx] for x in X]))
            categories_.append(cat_set)
        self.categories = categories_
        return self
    
    def transform(self, X):
        def to_array(record):
            # convert records to list of things...
            result = []
            for idx, rec in enumerate(record):
                valid_cats = self.categories[idx]
                result.extend([1 if x == rec else 0 for x in valid_cats])
            return result
        return [to_array(x) for x in X]
    
    def get_config(self):
        return {'categories': self.categories, 'handle_unknown':self.handle_unknown}


if __name__ == "__main__":
    tc = TextCleaner()
    output = tc.transform(["hello? world!"])
    #print(output)

    X = ['one two three', 'four five six']
    bow = CountVectorizer()
    X_trans = bow.fit_transform(X)
    #print(X_trans)

    ohe = OneHotEncoder()
    X = [['cat', 1], ['dog', 0]]
    X_trans = ohe.fit_transform(X)
    #print(X_trans)

    # now we need to be able to dump....



