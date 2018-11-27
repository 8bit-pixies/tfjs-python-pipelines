
from feature import CountVectorizer

tc = CountVectorizer(['confined', '"traditional', 'telkens', 'shielding,', 'tlas.', 'gain', 'members', 'headline).', 'hi', 'military.', 'conference,', 'despised', 'spacedrive', 'concerned.', 'yet...', 'squeaky-clean', '>built', '"dried"', '(tm).', 'grapple', '>>>kingdom', 'god(tm)', 'description?', '740', '8.17]', '>is,', 'favourable', 'profitability', '"today', 'pitch', '"faith', 'hereby', 'clipper', 'beer', '+by', '>gas', '"muslim"', 'disorders,', 'c-', 'sooner', 'atheists.', 'worship', 'speed/aoa/power.', '#1:', 'cchung@phy.duke.edu', 'anomalous', 'america', 'even.', 'apocrypha', 'law."', 'mixture,', '(believe', 'covert', 'wife', 'silly.', 'population:', 'smm:', 'finish', 'jehovah', 'kagoshima', '"oh', '>writing', 'fido@socs.uts.edu.au', 'quotes', 'transaction', 'hq', 'defined,', 'brinkley"', '>50%', '>wp', 'infrastructure,', ':>', '>disastrous', 'crafts??', 'shortwave', 'believer!', '>usage', 'refueling)', 'panel.', 'programs",', 'ironic.', '*obvious*,', 'vapour', 'ages.', "faq/manifest'.", 'coordination', 'space:', 'relativity', 'ramjets', 'knocking', '->gathered', 'doing,', '======================================================================', 'fairness,', 'candy', 'sands', 'opf:', 'potential.', 'faq.addresses', '"bad'])

X_trans = tc.transform(['hello world'])
# print(X_trans)
