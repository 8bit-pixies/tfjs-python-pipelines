'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.OneHotEncoder = exports.CountVectorizer = exports.TextCleaner = exports.TransformerMixin = exports.merge_two_dicts = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _orgTranscrypt__runtime__ = require('./org.transcrypt.__runtime__.js');

var _re = require('./re.js');

var __module_re__ = _interopRequireWildcard(_re);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Transcrypt'ed from Python, 2018-11-27 16:09:18
var re = {};

(0, _orgTranscrypt__runtime__.__nest__)(re, '', __module_re__);
var __name__ = 'feature';
var merge_two_dicts = exports.merge_two_dicts = function merge_two_dicts(x, y) {
	var z = function () {
		var __accu0__ = [];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = x[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var i = _step.value;

				__accu0__.append((0, _orgTranscrypt__runtime__.list)([i, i[j]]));
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return (0, _orgTranscrypt__runtime__.dict)(__accu0__);
	}();
	z.py_update(y);
	return z;
};
var TransformerMixin = exports.TransformerMixin = (0, _orgTranscrypt__runtime__.__class__)('TransformerMixin', [_orgTranscrypt__runtime__.object], {
	__module__: __name__,
	get fit() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, X, y) {
			if (typeof y == 'undefined' || y != null && y.hasOwnProperty("__kwargtrans__")) {
				;
				var y = null;
			};
			return self;
		});
	},
	get transform() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, X) {
			return X;
		});
	},
	get fit_transform() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, X, y) {
			if (typeof y == 'undefined' || y != null && y.hasOwnProperty("__kwargtrans__")) {
				;
				var y = null;
			};
			self.fit(X, y);
			return self.transform(X);
		});
	},
	get get_config() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			return (0, _orgTranscrypt__runtime__.dict)({});
		});
	}
});
var TextCleaner = exports.TextCleaner = (0, _orgTranscrypt__runtime__.__class__)('TextCleaner', [TransformerMixin], {
	__module__: __name__,
	get transform() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, X) {
			var cleaner = function cleaner(string) {
				var string = re.sub('[^a-zA-Z0-9\\s]+', '', string);
				return string;
			};
			var X = function () {
				var __accu0__ = [];
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = X[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var x = _step2.value;

						__accu0__.append(cleaner(x));
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				return __accu0__;
			}();
			return X;
		});
	}
});
var CountVectorizer = exports.CountVectorizer = (0, _orgTranscrypt__runtime__.__class__)('CountVectorizer', [TransformerMixin], {
	__module__: __name__,
	get __init__() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, vocab) {
			if (typeof vocab == 'undefined' || vocab != null && vocab.hasOwnProperty("__kwargtrans__")) {
				;
				var vocab = (0, _orgTranscrypt__runtime__.list)([]);
			};
			self.vocab = vocab;
		});
	},
	get fit() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, X, y, refit) {
			if (typeof y == 'undefined' || y != null && y.hasOwnProperty("__kwargtrans__")) {
				;
				var y = null;
			};
			if (typeof refit == 'undefined' || refit != null && refit.hasOwnProperty("__kwargtrans__")) {
				;
				var refit = true;
			};
			if ((0, _orgTranscrypt__runtime__.len)(self.vocab) > 0 && !refit) {
				return self;
			}
			var words = function () {
				var __accu0__ = [];
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = X[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var x = _step3.value;

						__accu0__.append(x.lower().py_split());
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3.return) {
							_iterator3.return();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}

				return __accu0__;
			}();
			var words_flatten = function () {
				var __accu0__ = [];
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = words[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var x = _step4.value;
						var _iteratorNormalCompletion5 = true;
						var _didIteratorError5 = false;
						var _iteratorError5 = undefined;

						try {
							for (var _iterator5 = x[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
								var y = _step5.value;

								__accu0__.append(y);
							}
						} catch (err) {
							_didIteratorError5 = true;
							_iteratorError5 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion5 && _iterator5.return) {
									_iterator5.return();
								}
							} finally {
								if (_didIteratorError5) {
									throw _iteratorError5;
								}
							}
						}
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}

				return __accu0__;
			}();
			var word_set = (0, _orgTranscrypt__runtime__.list)((0, _orgTranscrypt__runtime__.set)(words_flatten));
			self.vocab = word_set;
			return self;
		});
	},
	get transform() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, X) {
			var words = function () {
				var __accu0__ = [];
				var _iteratorNormalCompletion6 = true;
				var _didIteratorError6 = false;
				var _iteratorError6 = undefined;

				try {
					for (var _iterator6 = X[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
						var x = _step6.value;

						__accu0__.append(x.lower().py_split());
					}
				} catch (err) {
					_didIteratorError6 = true;
					_iteratorError6 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion6 && _iterator6.return) {
							_iterator6.return();
						}
					} finally {
						if (_didIteratorError6) {
							throw _iteratorError6;
						}
					}
				}

				return __accu0__;
			}();
			var list_len = (0, _orgTranscrypt__runtime__.len)(self.vocab);
			var words_to_vec = function words_to_vec(word_list) {
				var array = function () {
					var __accu0__ = [];
					for (var _ = 0; _ < list_len; _++) {
						__accu0__.append(0);
					}
					return __accu0__;
				}();
				var _iteratorNormalCompletion7 = true;
				var _didIteratorError7 = false;
				var _iteratorError7 = undefined;

				try {
					for (var _iterator7 = (0, _orgTranscrypt__runtime__.enumerate)(self.vocab)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
						var _ref = _step7.value;

						var _ref2 = _slicedToArray(_ref, 2);

						var idx = _ref2[0];
						var wd = _ref2[1];

						var counter = (0, _orgTranscrypt__runtime__.len)(function () {
							var __accu0__ = [];
							var _iteratorNormalCompletion8 = true;
							var _didIteratorError8 = false;
							var _iteratorError8 = undefined;

							try {
								for (var _iterator8 = word_list[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
									var x = _step8.value;

									if (x == wd) {
										__accu0__.append(1);
									}
								}
							} catch (err) {
								_didIteratorError8 = true;
								_iteratorError8 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion8 && _iterator8.return) {
										_iterator8.return();
									}
								} finally {
									if (_didIteratorError8) {
										throw _iteratorError8;
									}
								}
							}

							return __accu0__;
						}());
						if (counter > 0) {
							array[idx] = counter;
						}
					}
				} catch (err) {
					_didIteratorError7 = true;
					_iteratorError7 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion7 && _iterator7.return) {
							_iterator7.return();
						}
					} finally {
						if (_didIteratorError7) {
							throw _iteratorError7;
						}
					}
				}

				return array;
			};
			return function () {
				var __accu0__ = [];
				var _iteratorNormalCompletion9 = true;
				var _didIteratorError9 = false;
				var _iteratorError9 = undefined;

				try {
					for (var _iterator9 = words[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
						var x = _step9.value;

						__accu0__.append(words_to_vec(x));
					}
				} catch (err) {
					_didIteratorError9 = true;
					_iteratorError9 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion9 && _iterator9.return) {
							_iterator9.return();
						}
					} finally {
						if (_didIteratorError9) {
							throw _iteratorError9;
						}
					}
				}

				return __accu0__;
			}();
		});
	},
	get get_config() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			return (0, _orgTranscrypt__runtime__.dict)({ 'vocab': self.vocab });
		});
	}
});
var OneHotEncoder = exports.OneHotEncoder = (0, _orgTranscrypt__runtime__.__class__)('OneHotEncoder', [TransformerMixin], {
	__module__: __name__,
	get __init__() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, categories, handle_unknown) {
			if (typeof categories == 'undefined' || categories != null && categories.hasOwnProperty("__kwargtrans__")) {
				;
				var categories = (0, _orgTranscrypt__runtime__.dict)({});
			};
			if (typeof handle_unknown == 'undefined' || handle_unknown != null && handle_unknown.hasOwnProperty("__kwargtrans__")) {
				;
				var handle_unknown = 'ignore';
			};
			self.categories = categories;
			self.handle_unknown = handle_unknown;
		});
	},
	get fit() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, X, y) {
			if (typeof y == 'undefined' || y != null && y.hasOwnProperty("__kwargtrans__")) {
				;
				var y = null;
			};
			var categories_ = (0, _orgTranscrypt__runtime__.list)([]);
			var num_cols = (0, _orgTranscrypt__runtime__.len)(X[0]);
			for (var idx = 0; idx < num_cols; idx++) {
				var cat_set = (0, _orgTranscrypt__runtime__.list)((0, _orgTranscrypt__runtime__.set)(function () {
					var __accu0__ = [];
					var _iteratorNormalCompletion10 = true;
					var _didIteratorError10 = false;
					var _iteratorError10 = undefined;

					try {
						for (var _iterator10 = X[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
							var x = _step10.value;

							__accu0__.append(x[idx]);
						}
					} catch (err) {
						_didIteratorError10 = true;
						_iteratorError10 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion10 && _iterator10.return) {
								_iterator10.return();
							}
						} finally {
							if (_didIteratorError10) {
								throw _iteratorError10;
							}
						}
					}

					return __accu0__;
				}()));
				categories_.append(cat_set);
			}
			self.categories = categories_;
			return self;
		});
	},
	get transform() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, X) {
			var to_array = function to_array(record) {
				var result = (0, _orgTranscrypt__runtime__.list)([]);
				var _iteratorNormalCompletion11 = true;
				var _didIteratorError11 = false;
				var _iteratorError11 = undefined;

				try {
					for (var _iterator11 = (0, _orgTranscrypt__runtime__.enumerate)(record)[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
						var _ref3 = _step11.value;

						var _ref4 = _slicedToArray(_ref3, 2);

						var idx = _ref4[0];
						var rec = _ref4[1];

						var valid_cats = self.categories[idx];
						result.extend(function () {
							var __accu0__ = [];
							var _iteratorNormalCompletion12 = true;
							var _didIteratorError12 = false;
							var _iteratorError12 = undefined;

							try {
								for (var _iterator12 = valid_cats[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
									var x = _step12.value;

									__accu0__.append(x == rec ? 1 : 0);
								}
							} catch (err) {
								_didIteratorError12 = true;
								_iteratorError12 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion12 && _iterator12.return) {
										_iterator12.return();
									}
								} finally {
									if (_didIteratorError12) {
										throw _iteratorError12;
									}
								}
							}

							return __accu0__;
						}());
					}
				} catch (err) {
					_didIteratorError11 = true;
					_iteratorError11 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion11 && _iterator11.return) {
							_iterator11.return();
						}
					} finally {
						if (_didIteratorError11) {
							throw _iteratorError11;
						}
					}
				}

				return result;
			};
			return function () {
				var __accu0__ = [];
				var _iteratorNormalCompletion13 = true;
				var _didIteratorError13 = false;
				var _iteratorError13 = undefined;

				try {
					for (var _iterator13 = X[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
						var x = _step13.value;

						__accu0__.append(to_array(x));
					}
				} catch (err) {
					_didIteratorError13 = true;
					_iteratorError13 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion13 && _iterator13.return) {
							_iterator13.return();
						}
					} finally {
						if (_didIteratorError13) {
							throw _iteratorError13;
						}
					}
				}

				return __accu0__;
			}();
		});
	},
	get get_config() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			return (0, _orgTranscrypt__runtime__.dict)({ 'categories': self.categories, 'handle_unknown': self.handle_unknown });
		});
	}
});
if (__name__ == '__main__') {
	var tc = TextCleaner();
	var output = tc.transform((0, _orgTranscrypt__runtime__.list)(['hello? world!']));
	var X = (0, _orgTranscrypt__runtime__.list)(['one two three', 'four five six']);
	var bow = CountVectorizer();
	var X_trans = bow.fit_transform(X);
	var ohe = OneHotEncoder();
	var X = (0, _orgTranscrypt__runtime__.list)([(0, _orgTranscrypt__runtime__.list)(['cat', 1]), (0, _orgTranscrypt__runtime__.list)(['dog', 0])]);
	var X_trans = ohe.fit_transform(X);
}

//# sourceMappingURL=feature.map
