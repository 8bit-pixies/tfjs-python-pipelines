from feature import BagOfWords, FilterColumns, Pipeline, TextCleaner
from sklearn.datasets import fetch_20newsgroups
import tensorflowjs as tfjs
import keras
from keras.layers import Dense
import numpy as np

# import jinja2
import json


categories = ['alt.atheism', 'sci.space']

twenty_train = fetch_20newsgroups(subset='train',
     categories=categories, shuffle=True, random_state=42)

twenty_train.data = twenty_train.data[:1000]
twenty_train.target = twenty_train.target[:1000]

# twenty_train.data
# twenty_train.target

print("Building Pipeline...")
top_k = 1000
tc = TextCleaner()
bow = BagOfWords(top_k=1000)
fc = FilterColumns(['one'])
fp = Pipeline(steps=[tc, bow, fc], verbose=True)

fp.fit(twenty_train.data)
print("Training complete...")
# fp.word_dict, fp.max_words

print("Transforming Pipeline...")
X = np.array(fp.transform(twenty_train.data))[:, :top_k]
print("Transforming complete...")

max_dim = X.shape[1]

y = keras.utils.to_categorical(twenty_train.target)

print("Training Keras/TF model...")
model = keras.models.Sequential()
model.add(Dense(units=512, activation='relu', input_dim=max_dim))
model.add(Dense(units=64, activation='relu'))
model.add(Dense(units=2, activation='softmax'))
model.compile(loss='categorical_crossentropy',
              optimizer='adam',
              metrics=['accuracy'])
model.fit(X, y, epochs=5)
tfjs.converters.save_keras_model(model, 'model')

# dump and export python model.
fp.export("model.json")

# export models as pure *.py files - this is through combination of loading pipelines and explicitly loading vars.

def dict_to_kwargs(mydict):
    return ', '.join(['{}={!r}'.format(k, v) for k, v in mydict.items()])

tc_vars = dict_to_kwargs(json.load(open("{}model.json".format(tc.__class__.__name__), 'r')))
bow_vars = dict_to_kwargs(json.load(open("{}model.json".format(bow.__class__.__name__), 'r')))
fc_vars = dict_to_kwargs(json.load(open("{}model.json".format(fc.__class__.__name__), 'r')))


model_template_dumper = """
from feature import BagOfWords, FilterColumns, Pipeline, TextCleaner

tc = TextCleaner({tc_vars})
bow = BagOfWords({bow_vars})
fc = FilterColumns({fc_vars})
fp = Pipeline(steps=[tc, bow, fc])
""".format(tc_vars = tc_vars, bow_vars = bow_vars, fc_vars = fc_vars)

with open('feature_pipeline.py', 'w') as f:
    f.write(model_template_dumper)

