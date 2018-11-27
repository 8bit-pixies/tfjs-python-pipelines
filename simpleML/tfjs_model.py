import sys

template = """{tf_header}
{feature_prep}
{tf_predict}
"""

tf_header = """'use strict';
const tf = require('@tensorflow/tfjs')
require('@tensorflow/tfjs-node')
"""

tf_predict = """async function predict(data){
    // Define a model.
    const model = await tf.loadModel('file:///Users/chapmansiu/Documents/GitHub/tfjs-python-pipelines/simpleML/model/model.json');
    //console.log(model);
    // technically speaking word count can be 1 or greater
    // for ease we assume count max of 1...
    model.predict(tf.tensor2d(data, [1, data[0].length])).print();
}

var pred = predict(X_trans)
console.log(pred)
"""

def feature_cleaner(text):
    """
    strips out 'use strict'....
    """
    import re
    return re.sub(r"'use strict';", "\n", text)

args = sys.argv
feature_prep = open(args[1]+".js", 'r').read()

with open(args[1]+".js", 'w') as f:
    feature_prep = feature_cleaner(feature_prep)
    template_info = template.format(tf_header=tf_header, tf_predict=tf_predict, feature_prep=feature_prep)
    f.write(template_info)

