from feature import BagOfWords, FilterColumns, Pipeline, TextCleaner
from sklearn.datasets import fetch_20newsgroups
import tensorflowjs as tfjs
import keras
from keras.layers import Dense
import numpy as np

# import jinja2
import json

from feature_pipeline import fp


categories = ['alt.atheism', 'sci.space']

twenty_train = fetch_20newsgroups(subset='train',
     categories=categories, shuffle=True, random_state=42)

twenty_train.data = twenty_train.data[:1000]
twenty_train.target = twenty_train.target[:1000]

X = np.array(fp.transform(twenty_train.data))
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