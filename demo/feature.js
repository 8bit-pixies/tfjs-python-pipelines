// Transcrypt'ed from Python, 2018-11-26 15:00:00
var json = {};
var math = {};
var re = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_re__ from './re.js';
__nest__ (re, '', __module_re__);
import * as __module_json__ from './json.js';
__nest__ (json, '', __module_json__);
import * as __module_math__ from './math.js';
__nest__ (math, '', __module_math__);
var __name__ = 'feature';
export var merge_two_dicts = function (x, y) {
	var z = x.copy ();
	z.py_update (y);
	return z;
};
export var SimpleTransformerMixin =  __class__ ('SimpleTransformerMixin', [object], {
	__module__: __name__,
	get fit () {return __get__ (this, function (self, X, y) {
		if (typeof y == 'undefined' || (y != null && y.hasOwnProperty ("__kwargtrans__"))) {;
			var y = null;
		};
		return self;
	});},
	get transform () {return __get__ (this, function (self, X) {
		return X;
	});},
	get fit_transform () {return __get__ (this, function (self, X, y) {
		if (typeof y == 'undefined' || (y != null && y.hasOwnProperty ("__kwargtrans__"))) {;
			var y = null;
		};
		self.fit (X, y);
		return self.transform (X);
	});},
	get update_base_config () {return __get__ (this, function (self, base_config) {
		if (typeof base_config == 'undefined' || (base_config != null && base_config.hasOwnProperty ("__kwargtrans__"))) {;
			var base_config = dict ({});
		};
		try {
			self.base_config = merge_two_dicts (self.base_config, base_config);
		}
		catch (__except0__) {
			self.base_config = base_config;
		}
	});},
	get update_all_ () {return __get__ (this, function (self, config) {
		for (var key of config) {
			setattr (self, key, config [key]);
		}
	});},
	get get_config () {return __get__ (this, function (self) {
		return dict ({});
	});},
	get export () {return __get__ (this, function (self, path) {
		if (typeof path == 'undefined' || (path != null && path.hasOwnProperty ("__kwargtrans__"))) {;
			var path = null;
		};
		var f = open (path, 'w');
		try {
			f.__enter__ ();
			var conf = self.get_config ();
			f.write (json.dumps (conf));
			f.__exit__ ();
		}
		catch (__except0__) {
			if (! (f.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
				throw __except0__;
			}
		}
	});},
	get load () {return __get__ (this, function (self, path) {
		if (typeof path == 'undefined' || (path != null && path.hasOwnProperty ("__kwargtrans__"))) {;
			var path = null;
		};
		var f = open (path, 'r');
		try {
			f.__enter__ ();
			var config = json.loads (f.read ());
			f.__exit__ ();
		}
		catch (__except0__) {
			if (! (f.__exit__ (__except0__.name, __except0__, __except0__.stack))) {
				throw __except0__;
			}
		}
		self.update_all_ (config);
	});}
});
export var Pipeline =  __class__ ('Pipeline', [SimpleTransformerMixin], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, steps, verbose) {
		if (typeof steps == 'undefined' || (steps != null && steps.hasOwnProperty ("__kwargtrans__"))) {;
			var steps = list ([]);
		};
		if (typeof verbose == 'undefined' || (verbose != null && verbose.hasOwnProperty ("__kwargtrans__"))) {;
			var verbose = false;
		};
		self.steps = steps;
		self.verbose = verbose;
	});},
	get fit () {return __get__ (this, function (self, X, y) {
		if (typeof y == 'undefined' || (y != null && y.hasOwnProperty ("__kwargtrans__"))) {;
			var y = null;
		};
		var base_config = dict ({});
		var update_steps = list ([]);
		for (var tmx of self.steps) {
			if (self.verbose) {
				print ('\tTraining {}...'.format (tmx.__class__.__name__));
			}
			tmx.update_base_config (base_config);
			var tmp_ = tmx.fit (X, y);
			var base_config = tmp_.get_config ();
			update_steps.append (tmp_);
			if (self.verbose) {
				print ('\tTransforming {}...'.format (tmx.__class__.__name__));
			}
			var X = tmx.transform (X);
		}
		self.steps = update_steps;
		return self;
	});},
	get transform () {return __get__ (this, function (self, X) {
		for (var tmx of self.steps) {
			var X = tmx.transform (X);
		}
		return X;
	});},
	get load_export_ () {return __get__ (this, function (self, path, mode) {
		if (typeof mode == 'undefined' || (mode != null && mode.hasOwnProperty ("__kwargtrans__"))) {;
			var mode = 'export';
		};
		if (__in__ ('/', path)) {
			var folder_fname = path.rsplit ('/', 1);
		}
		else if (__in__ ('\\', path)) {
			var folder_fname = path.rsplit ('\\', 1);
		}
		else {
			var folder_fname = path.rsplit ('/', 1);
		}
		var folder_dir = (len (folder_fname) == 1 ? '' : folder_fname [0]);
		var basename = (len (folder_fname) == 1 ? folder_fname [0] : folder_fname [1]);
		for (var tmx of self.steps) {
			var fname = tmx.__class__.__name__ + basename;
			var full_path = (folder_dir == '' ? fname : (folder_dir + '/') + fname);
			if (mode == 'export') {
				tmx.export (full_path);
			}
			else if (mode == 'load') {
				tmx.load (full_path);
			}
			else {
				// pass;
			}
		}
	});},
	get load () {return __get__ (this, function (self, path) {
		self.load_export_ (path, __kwargtrans__ ({mode: 'load'}));
	});},
	get export () {return __get__ (this, function (self, path) {
		self.load_export_ (path, __kwargtrans__ ({mode: 'export'}));
	});}
});
export var TextCleaner =  __class__ ('TextCleaner', [SimpleTransformerMixin], {
	__module__: __name__,
	get transform () {return __get__ (this, function (self, X) {
		var cleaner = function (string) {
			var string = re.sub ('[^a-zA-Z0-9\\s]+', '', string);
			return string;
		};
		var X = (function () {
			var __accu0__ = [];
			for (var x of X) {
				__accu0__.append (cleaner (x));
			}
			return __accu0__;
		}) ();
		return X;
	});}
});
export var BagOfWords =  __class__ ('BagOfWords', [SimpleTransformerMixin], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, word_dict, idf, top_k, base_config, max_words) {
		if (typeof word_dict == 'undefined' || (word_dict != null && word_dict.hasOwnProperty ("__kwargtrans__"))) {;
			var word_dict = dict ({});
		};
		if (typeof idf == 'undefined' || (idf != null && idf.hasOwnProperty ("__kwargtrans__"))) {;
			var idf = null;
		};
		if (typeof top_k == 'undefined' || (top_k != null && top_k.hasOwnProperty ("__kwargtrans__"))) {;
			var top_k = null;
		};
		if (typeof base_config == 'undefined' || (base_config != null && base_config.hasOwnProperty ("__kwargtrans__"))) {;
			var base_config = dict ({});
		};
		if (typeof max_words == 'undefined' || (max_words != null && max_words.hasOwnProperty ("__kwargtrans__"))) {;
			var max_words = null;
		};
		self.word_dict = word_dict;
		self.max_words = (max_words === null ? len (self.word_dict) + 1 : max_words);
		self.idf = idf;
		self.top_k = top_k;
		self.base_config = base_config;
	});},
	get fit () {return __get__ (this, function (self, X, y) {
		if (typeof y == 'undefined' || (y != null && y.hasOwnProperty ("__kwargtrans__"))) {;
			var y = null;
		};
		var total_docs = len (X);
		var words = (function () {
			var __accu0__ = [];
			for (var x of X) {
				__accu0__.append (x.lower ().py_split ());
			}
			return __accu0__;
		}) ();
		var words_flatten = (function () {
			var __accu0__ = [];
			for (var x of words) {
				for (var y of x) {
					__accu0__.append (y);
				}
			}
			return __accu0__;
		}) ();
		var word_set = list (set (words_flatten));
		var counter = dict ({});
		var idf = dict ({});
		for (var wd of word_set) {
			var idf_ = math.log (float (total_docs) / (1 + len ((function () {
				var __accu0__ = [];
				for (var x of words) {
					if (__in__ (wd, x)) {
						__accu0__.append (1);
					}
				}
				return __accu0__;
			}) ())));
			if (idf_ > 0) {
				counter [wd] = len ((function () {
					var __accu0__ = [];
					for (var x of words_flatten) {
						if (x == wd) {
							__accu0__.append (1);
						}
					}
					return __accu0__;
				}) ());
				idf [wd] = idf_;
			}
		}
		var max_words = len (word_set);
		if (self.top_k !== null) {
			var idf_vals = (function () {
				var __accu0__ = [];
				for (var x of idf) {
					__accu0__.append (idf [x]);
				}
				return __accu0__;
			}) ();
			var idf_vals = sorted (idf_vals, __kwargtrans__ ({reverse: true})).__getslice__ (0, self.top_k, 1);
			var min_vals = (len (idf_vals) > 0 ? min (idf_vals) : 1.0);
			var idf = (function () {
				var __accu0__ = [];
				for (var x of idf) {
					if (idf [x] >= min_vals) {
						__accu0__.append (list ([x, idf [x]]));
					}
				}
				return dict (__accu0__);
			}) ();
		}
		self.word_dict = (function () {
			var __accu0__ = [];
			for (var [idx, word] of enumerate (idf)) {
				__accu0__.append (list ([word, idx]));
			}
			return dict (__accu0__);
		}) ();
		self.max_words = max_words;
		self.idf = idf;
		return self;
	});},
	get transform () {return __get__ (this, function (self, X) {
		var transform_sentence = function (sent) {
			var words = sent.lower ().py_split ();
			var max_word_score = (len (self.word_dict) > 0 ? max ((function () {
				var __accu0__ = [];
				for (var x of self.word_dict) {
					__accu0__.append (self.word_dict [x]);
				}
				return __accu0__;
			}) ()) : 1.0);
			var word_index = (function () {
				var __accu0__ = [];
				for (var x of words) {
					if (self.word_dict.py_get (x, null) !== null) {
						__accu0__.append (list ([x, self.word_dict.py_get (x, null)]));
					}
				}
				return dict (__accu0__);
			}) ();
			var word_set = set (word_index);
			var word_dict = dict ({});
			for (var word of word_set) {
				if (word === null) {
					continue;
				}
				var f_term = len ((function () {
					var __accu0__ = [];
					for (var x of word_index) {
						if (x == word) {
							__accu0__.append (x);
						}
					}
					return __accu0__;
				}) ());
				var tf = f_term * self.idf [word];
				if (self.idf !== null) {
					var idf_ = 0.5 + 0.5 * (f_term / max_word_score);
					var tf = (tf * idf_) * self.idf [word];
				}
				word_dict [word] = tf;
			}
			return (function () {
				var __accu0__ = [];
				for (var x of word_dict) {
					__accu0__.append (list ([self.word_dict [x], word_dict [x]]));
				}
				return dict (__accu0__);
			}) ();
		};
		var dict_to_list = function (sparse_dict) {
			var word_list = (function () {
				var __accu0__ = [];
				for (var x = 0; x < self.max_words; x++) {
					__accu0__.append (0);
				}
				return __accu0__;
			}) ();
			for (var x of sparse_dict) {
				word_list [x] = sparse_dict [x];
			}
			return word_list;
		};
		var sparse_out = (function () {
			var __accu0__ = [];
			for (var x of X) {
				__accu0__.append (dict_to_list (transform_sentence (x)));
			}
			return __accu0__;
		}) ();
		return sparse_out;
	});},
	get get_config () {return __get__ (this, function (self) {
		var new_config = dict ({'word_dict': self.word_dict, 'max_words': self.max_words, 'idf': self.idf, 'top_k': self.top_k});
		return new_config;
	});}
});
export var FilterColumns =  __class__ ('FilterColumns', [SimpleTransformerMixin], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, words, columns, base_config) {
		if (typeof words == 'undefined' || (words != null && words.hasOwnProperty ("__kwargtrans__"))) {;
			var words = list ([]);
		};
		if (typeof columns == 'undefined' || (columns != null && columns.hasOwnProperty ("__kwargtrans__"))) {;
			var columns = list ([]);
		};
		if (typeof base_config == 'undefined' || (base_config != null && base_config.hasOwnProperty ("__kwargtrans__"))) {;
			var base_config = dict ({});
		};
		self.base_config = base_config;
		self.columns = columns;
		self.words = words;
		self.update_column (words);
	});},
	get fit () {return __get__ (this, function (self, X, y) {
		if (typeof y == 'undefined' || (y != null && y.hasOwnProperty ("__kwargtrans__"))) {;
			var y = null;
		};
		self.update_column (self.words);
		return self;
	});},
	get transform () {return __get__ (this, function (self, X) {
		if (len (self.columns) == 0) {
			return X;
		}
		var filter_columns = function (x) {
			return (function () {
				var __accu0__ = [];
				for (var [indx, val] of enumerate (x)) {
					if (!__in__ (indx, self.columns)) {
						__accu0__.append (val);
					}
				}
				return __accu0__;
			}) ();
		};
		return (function () {
			var __accu0__ = [];
			for (var x of X) {
				__accu0__.append (filter_columns (x));
			}
			return __accu0__;
		}) ();
	});},
	get update_column () {return __get__ (this, function (self, words) {
		self.words = words;
		var word_dict = self.base_config.py_get ('word_dict', dict ({}));
		var column_index = list ([]);
		for (var word of words) {
			var indx = word_dict.py_get (word, null);
			if (indx === null) {
				continue;
			}
			column_index.append (indx);
		}
		self.columns = column_index;
	});},
	get get_config () {return __get__ (this, function (self, update_base) {
		if (typeof update_base == 'undefined' || (update_base != null && update_base.hasOwnProperty ("__kwargtrans__"))) {;
			var update_base = false;
		};
		var new_config = dict ({'columns': self.columns, 'words': self.words});
		if (update_base) {
			return merge_two_dicts (self.base_config, new_config);
		}
		else {
			return new_config;
		}
	});}
});
if (__name__ == '__main__') {
	var X = list (['one two three', 'four five six']);
	var bow = BagOfWords ();
	var X_trans = bow.fit_transform (X);
	var fc = FilterColumns (list (['one']));
	var pipeline = Pipeline (__kwargtrans__ ({steps: list ([bow, fc])}));
	var X_trans = pipeline.fit_transform (X);
}

//# sourceMappingURL=feature.map