from feature import CountVectorizer
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
top_k = 100

print("Building Pipeline...")
fp = CountVectorizer()

fp.fit(twenty_train.data)
fp.vocab = fp.vocab[:top_k]
print("Training complete...")
# fp.word_dict, fp.max_words

print("Transforming Pipeline...")
X = np.array(fp.transform(twenty_train.data))
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
params = fp.get_config()

# export models as pure *.py files - this is through combination of loading pipelines and explicitly loading vars.

def dict_to_kwargs(mydict):
    return ', '.join(['{}'.format(v) for k, v in mydict.items()])

cv_vars = dict_to_kwargs(params)

tf_import = """
__pragma__('js', '{}', '''
const tf = require('@tensorflow/tfjs')
require('@tensorflow/tfjs-node')
''')
"""

tf_predict = """
__pragma__('js', '{}', '''
async function predict(data){
    // Define a model.
    const model = await tf.loadModel('file:///Users/chapmansiu/Documents/GitHub/tfjs-python-pipelines/simpleML/model/model.json');
    //console.log(model);
    // technically speaking word count can be 1 or greater
    // for ease we assume count max of 1...
    model.predict(tf.tensor2d(data, [1, data[0].length])).print();
}

var pred = predict(X_trans)
''')
"""

model_template_dumper = """

from feature import CountVectorizer

tc = CountVectorizer({cv_vars})

X_trans = tc.transform(['hello world'])
# print(X_trans)


print(pred)
""".format(cv_vars = cv_vars)

with open('feature_pipeline.py', 'w') as f:
    f.write(model_template_dumper)

