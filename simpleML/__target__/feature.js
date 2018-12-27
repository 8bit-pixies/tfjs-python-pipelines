// Transcrypt'ed from Python, 2018-11-27 16:09:18
var re = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_re__ from './re.js';
__nest__ (re, '', __module_re__);
var __name__ = 'feature';
export var merge_two_dicts = function (x, y) {
	var z = (function () {
		var __accu0__ = [];
		for (var i of x) {
			__accu0__.append (list ([i, i [j]]));
		}
		return dict (__accu0__);
	}) ();
	z.py_update (y);
	return z;
};
export var TransformerMixin =  __class__ ('TransformerMixin', [object], {
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
	get get_config () {return __get__ (this, function (self) {
		return dict ({});
	});}
});
export var TextCleaner =  __class__ ('TextCleaner', [TransformerMixin], {
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
export var CountVectorizer =  __class__ ('CountVectorizer', [TransformerMixin], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, vocab) {
		if (typeof vocab == 'undefined' || (vocab != null && vocab.hasOwnProperty ("__kwargtrans__"))) {;
			var vocab = list ([]);
		};
		self.vocab = vocab;
	});},
	get fit () {return __get__ (this, function (self, X, y, refit) {
		if (typeof y == 'undefined' || (y != null && y.hasOwnProperty ("__kwargtrans__"))) {;
			var y = null;
		};
		if (typeof refit == 'undefined' || (refit != null && refit.hasOwnProperty ("__kwargtrans__"))) {;
			var refit = true;
		};
		if (len (self.vocab) > 0 && !(refit)) {
			return self;
		}
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
		self.vocab = word_set;
		return self;
	});},
	get transform () {return __get__ (this, function (self, X) {
		var words = (function () {
			var __accu0__ = [];
			for (var x of X) {
				__accu0__.append (x.lower ().py_split ());
			}
			return __accu0__;
		}) ();
		var list_len = len (self.vocab);
		var words_to_vec = function (word_list) {
			var array = (function () {
				var __accu0__ = [];
				for (var _ = 0; _ < list_len; _++) {
					__accu0__.append (0);
				}
				return __accu0__;
			}) ();
			for (var [idx, wd] of enumerate (self.vocab)) {
				var counter = len ((function () {
					var __accu0__ = [];
					for (var x of word_list) {
						if (x == wd) {
							__accu0__.append (1);
						}
					}
					return __accu0__;
				}) ());
				if (counter > 0) {
					array [idx] = counter;
				}
			}
			return array;
		};
		return (function () {
			var __accu0__ = [];
			for (var x of words) {
				__accu0__.append (words_to_vec (x));
			}
			return __accu0__;
		}) ();
	});},
	get get_config () {return __get__ (this, function (self) {
		return dict ({'vocab': self.vocab});
	});}
});
export var OneHotEncoder =  __class__ ('OneHotEncoder', [TransformerMixin], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, categories, handle_unknown) {
		if (typeof categories == 'undefined' || (categories != null && categories.hasOwnProperty ("__kwargtrans__"))) {;
			var categories = dict ({});
		};
		if (typeof handle_unknown == 'undefined' || (handle_unknown != null && handle_unknown.hasOwnProperty ("__kwargtrans__"))) {;
			var handle_unknown = 'ignore';
		};
		self.categories = categories;
		self.handle_unknown = handle_unknown;
	});},
	get fit () {return __get__ (this, function (self, X, y) {
		if (typeof y == 'undefined' || (y != null && y.hasOwnProperty ("__kwargtrans__"))) {;
			var y = null;
		};
		var categories_ = list ([]);
		var num_cols = len (X [0]);
		for (var idx = 0; idx < num_cols; idx++) {
			var cat_set = list (set ((function () {
				var __accu0__ = [];
				for (var x of X) {
					__accu0__.append (x [idx]);
				}
				return __accu0__;
			}) ()));
			categories_.append (cat_set);
		}
		self.categories = categories_;
		return self;
	});},
	get transform () {return __get__ (this, function (self, X) {
		var to_array = function (record) {
			var result = list ([]);
			for (var [idx, rec] of enumerate (record)) {
				var valid_cats = self.categories [idx];
				result.extend ((function () {
					var __accu0__ = [];
					for (var x of valid_cats) {
						__accu0__.append ((x == rec ? 1 : 0));
					}
					return __accu0__;
				}) ());
			}
			return result;
		};
		return (function () {
			var __accu0__ = [];
			for (var x of X) {
				__accu0__.append (to_array (x));
			}
			return __accu0__;
		}) ();
	});},
	get get_config () {return __get__ (this, function (self) {
		return dict ({'categories': self.categories, 'handle_unknown': self.handle_unknown});
	});}
});
if (__name__ == '__main__') {
	var tc = TextCleaner ();
	var output = tc.transform (list (['hello? world!']));
	var X = list (['one two three', 'four five six']);
	var bow = CountVectorizer ();
	var X_trans = bow.fit_transform (X);
	var ohe = OneHotEncoder ();
	var X = list ([list (['cat', 1]), list (['dog', 0])]);
	var X_trans = ohe.fit_transform (X);
}

//# sourceMappingURL=feature.map