# Python Pipelines with tensorflow-js

The purpose of this repository is to explore pipelines for building Keras models in Python and deploying them in both client side and server side. 

This repository explores not only the building of models, but also the feature preparation and the mechanics, limitations and considerations we may need to make. 

## Structure

In almost all machine learning models there are three steps:

1.  Feature Engineering: the process where we convert our data into tensors (e.g. text to numeric representation). This will reside in `feature.py`
2.  Model scoring: process where we train and score our model. This will reside in `model.py`. 
3.  Decisioning: process where we take our prediction and convert it to plain text output (e.g. predicted sentiment is "Positive - due to reason XYZ with probability X") `decision.py`

```
pip install tensorflow tensorflowjs==0.6.7 keras==2.2.2 scikit-learn numpy==1.15.1 keras-applications==1.0.4 keras-preprocessing==1.0.2 pandas
pip freeze > requirements.txt
```


## Approach

This approach will attempt to solve the challenge through running everything via the `script` tag - we'll see how we go. Simpliest example is to try running by:

```
make py=feature_pipeline build
node feature_pipeline.js
```

## Demo

see `/demo`

```
python -m http.server
```