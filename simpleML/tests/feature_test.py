from feature import CountVectorizer, TextCleaner, OneHotEncoder
import numpy as np

import tempfile

def test_feature():
    X = ['one two three', 'four five six']
    bow = CountVectorizer()
    X_trans = bow.fit_transform(X)
    #print(bow.get_config())
    assert np.array(X_trans).shape[0] > 0

def test_textcleaner():
    X = ["Hello? World!"]
    tc = TextCleaner()
    X_trans = tc.transform(X)
    assert X_trans[0] == "Hello World"

def test_ohe():
    ohe = OneHotEncoder()
    X = [['cat', 1], ['dog', 0]]
    X_trans = ohe.fit_transform(X)
    assert np.array(X_trans).shape[0] == 2
    assert np.array(X_trans).shape[1] == 4