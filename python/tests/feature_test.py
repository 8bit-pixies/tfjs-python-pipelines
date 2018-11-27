from feature import BagOfWords, FilterColumns, Pipeline, TextCleaner
import numpy as np

import tempfile

def test_feature():
    X = ['one two three', 'four five six']
    bow = BagOfWords()
    X_trans = bow.fit_transform(X)
    #print(bow.get_config())
    assert np.array(X_trans).shape[0] > 0
    assert 'word_dict' in bow.get_config()
    assert 'max_words' in bow.get_config()

def test_textcleaner():
    X = ["Hello? World!"]
    tc = TextCleaner()
    X_trans = tc.transform(X)
    assert X_trans[0] == "Hello World"

def test_feature_topk():
    X = ['one two three', 'one one two two four five six']
    bow_orig = BagOfWords()
    bow = BagOfWords(top_k=2)
    bow_orig.fit(X)
    X_trans = bow.fit_transform(X)
    #print(len(bow.get_config()['word_dict']))
    #print(len(bow_orig.get_config()['word_dict']))
    assert np.array(X_trans).shape[0] > 0
    assert 'word_dict' in bow.get_config()
    assert 'top_k' in bow.get_config()
    assert len(bow.get_config()['word_dict']) < len(bow_orig.get_config()['word_dict'])

def test_pipeline():
    X = ['one two three', 'four five six one! two?']
    tc = TextCleaner()
    bow = BagOfWords()
    X_trans1 = bow.fit_transform(X)
    fc = FilterColumns(['one'])
    pipeline = Pipeline(steps=[tc, bow, fc])
    X_trans = pipeline.fit_transform(X)
    assert np.array(X_trans1).shape[1] > np.array(X_trans).shape[1]

def test_importexport():
    # tests importing and exporting of a single item
    import os
    with tempfile.TemporaryDirectory() as tmpdirname:
        temp_json = os.path.join(tmpdirname, 'temp.json')
        X = ['one two three', 'four five six']
        bow = BagOfWords()
        bow_1 = BagOfWords()
        X_trans = bow.fit_transform(X)
        X_noload = bow_1.transform(X)
        assert np.array(X_trans).shape[1] > np.array(X_noload).shape[1]

        bow.export(temp_json)
        bow_1.load(temp_json)
        X_load = bow_1.transform(X)
        assert np.array(X_trans).shape[1] == np.array(X_load).shape[1]

def test_importexport_pipeline():
    # tests importing and exporting of a single item
    import os

    X = ['one two three', 'four five six']
    bow = BagOfWords()
    X_trans1 = bow.fit_transform(X)
    fc = FilterColumns(['one'])
    pipeline = Pipeline(steps=[bow, fc])
    X_trans = pipeline.fit_transform(X)

    with tempfile.TemporaryDirectory() as tmpdirname:
        temp_json = os.path.join(tmpdirname, 'temp.json')
        pipeline.export(temp_json)

        bow1 = BagOfWords()
        fc1 = FilterColumns(['one'])
        pipeline1 = Pipeline(steps=[bow1, fc1])
        X_noload = pipeline1.transform(X)

        pipeline1.load(temp_json)
        X_load = pipeline1.transform(X)
        assert np.array(X_trans).shape[1] == np.array(X_load).shape[1]
        assert np.array(X_load).shape[1] > np.array(X_noload).shape[1]