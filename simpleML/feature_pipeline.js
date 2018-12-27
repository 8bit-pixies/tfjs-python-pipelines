'use strict';
const tf = require('@tensorflow/tfjs')
require('@tensorflow/tfjs-node')




Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.X_trans = exports.tc = undefined;

var _orgTranscrypt__runtime__ = require('./org.transcrypt.__runtime__.js');

var _feature = require('./feature.js');

// Transcrypt'ed from Python, 2018-11-27 16:09:18
var __name__ = '__main__';
var tc = exports.tc = (0, _feature.CountVectorizer)((0, _orgTranscrypt__runtime__.list)(['confined', '"traditional', 'telkens', 'shielding,', 'tlas.', 'gain', 'members', 'headline).', 'hi', 'military.', 'conference,', 'despised', 'spacedrive', 'concerned.', 'yet...', 'squeaky-clean', '>built', '"dried"', '(tm).', 'grapple', '>>>kingdom', 'god(tm)', 'description?', '740', '8.17]', '>is,', 'favourable', 'profitability', '"today', 'pitch', '"faith', 'hereby', 'clipper', 'beer', '+by', '>gas', '"muslim"', 'disorders,', 'c-', 'sooner', 'atheists.', 'worship', 'speed/aoa/power.', '#1:', 'cchung@phy.duke.edu', 'anomalous', 'america', 'even.', 'apocrypha', 'law."', 'mixture,', '(believe', 'covert', 'wife', 'silly.', 'population:', 'smm:', 'finish', 'jehovah', 'kagoshima', '"oh', '>writing', 'fido@socs.uts.edu.au', 'quotes', 'transaction', 'hq', 'defined,', 'brinkley"', '>50%', '>wp', 'infrastructure,', ':>', '>disastrous', 'crafts??', 'shortwave', 'believer!', '>usage', 'refueling)', 'panel.', 'programs",', 'ironic.', '*obvious*,', 'vapour', 'ages.', "faq/manifest'.", 'coordination', 'space:', 'relativity', 'ramjets', 'knocking', '->gathered', 'doing,', '======================================================================', 'fairness,', 'candy', 'sands', 'opf:', 'potential.', 'faq.addresses', '"bad']));
var X_trans = exports.X_trans = tc.transform((0, _orgTranscrypt__runtime__.list)(['hello world']));

//# sourceMappingURL=feature_pipeline.map

async function predict(data){
    // Define a model.
    const model = await tf.loadModel('file:///Users/chapmansiu/Documents/GitHub/tfjs-python-pipelines/simpleML/model/model.json');
    //console.log(model);
    // technically speaking word count can be 1 or greater
    // for ease we assume count max of 1...
    model.predict(tf.tensor2d(data, [1, data[0].length])).print();
}

var pred = predict(X_trans)
console.log(pred)

