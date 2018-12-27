'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.purge = exports.escape = exports.subn = exports.sub = exports.finditer = exports.findall = exports.py_split = exports.fullmatch = exports.match = exports.search = exports.compile = exports.PyRegExp = exports.Regex = exports.Match = exports.ReIndexError = exports.error = exports.JSSTRICT = exports.J = exports.GLOBAL = exports.G = exports.STICKY = exports.Y = exports.ASCII = exports.A = exports.DEBUG = exports.VERBOSE = exports.X = exports.UNICODE = exports.U = exports.DOTALL = exports.S = exports.MULTILINE = exports.M = exports.LOCALE = exports.L = exports.IGNORECASE = exports.I = exports.TEMPLATE = exports.T = exports.translate = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); // Transcrypt'ed from Python, 2018-11-27 16:09:18


var _orgTranscrypt__runtime__ = require('./org.transcrypt.__runtime__.js');

var _reTranslate = require('./re.translate.js');

exports.translate = _reTranslate.translate;

var __name__ = 're';
var T = exports.T = 1 << 0;
var TEMPLATE = exports.TEMPLATE = T;
var I = exports.I = 1 << 1;
var IGNORECASE = exports.IGNORECASE = I;
var L = exports.L = 1 << 2;
var LOCALE = exports.LOCALE = L;
var M = exports.M = 1 << 3;
var MULTILINE = exports.MULTILINE = M;
var S = exports.S = 1 << 4;
var DOTALL = exports.DOTALL = S;
var U = exports.U = 1 << 5;
var UNICODE = exports.UNICODE = U;
var X = exports.X = 1 << 6;
var VERBOSE = exports.VERBOSE = X;
var DEBUG = exports.DEBUG = 1 << 7;
var A = exports.A = 1 << 8;
var ASCII = exports.ASCII = A;
var Y = exports.Y = 1 << 16;
var STICKY = exports.STICKY = Y;
var G = exports.G = 1 << 17;
var GLOBAL = exports.GLOBAL = G;
var J = exports.J = 1 << 19;
var JSSTRICT = exports.JSSTRICT = J;
var error = exports.error = (0, _orgTranscrypt__runtime__.__class__)('error', [_orgTranscrypt__runtime__.Exception], {
	__module__: __name__,
	get __init__() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, msg, error, pattern, flags, pos) {
			if (typeof pattern == 'undefined' || pattern != null && pattern.hasOwnProperty("__kwargtrans__")) {
				;
				var pattern = null;
			};
			if (typeof flags == 'undefined' || flags != null && flags.hasOwnProperty("__kwargtrans__")) {
				;
				var flags = 0;
			};
			if (typeof pos == 'undefined' || pos != null && pos.hasOwnProperty("__kwargtrans__")) {
				;
				var pos = null;
			};
			_orgTranscrypt__runtime__.Exception.__init__(self, msg, (0, _orgTranscrypt__runtime__.__kwargtrans__)({ error: error }));
			self.pattern = pattern;
			self.flags = flags;
			self.pos = pos;
		});
	}
});
var ReIndexError = exports.ReIndexError = (0, _orgTranscrypt__runtime__.__class__)('ReIndexError', [_orgTranscrypt__runtime__.IndexError], {
	__module__: __name__,
	get __init__() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			_orgTranscrypt__runtime__.IndexError.__init__(self, 'no such group');
		});
	}
});
var Match = exports.Match = (0, _orgTranscrypt__runtime__.__class__)('Match', [_orgTranscrypt__runtime__.object], {
	__module__: __name__,
	get __init__() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, mObj, string, pos, endpos, rObj, namedGroups) {
			if (typeof namedGroups == 'undefined' || namedGroups != null && namedGroups.hasOwnProperty("__kwargtrans__")) {
				;
				var namedGroups = null;
			};
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = (0, _orgTranscrypt__runtime__.enumerate)(mObj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _ref = _step.value;

					var _ref2 = _slicedToArray(_ref, 2);

					var index = _ref2[0];
					var match = _ref2[1];

					mObj[index] = mObj[index] == undefined ? null : mObj[index];
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

			self._obj = mObj;
			self._pos = pos;
			self._endpos = endpos;
			self._re = rObj;
			self._string = string;
			self._namedGroups = namedGroups;
			self._lastindex = self._lastMatchGroup();
			if (self._namedGroups !== null) {
				self._lastgroup = self._namedGroups[self._lastindex];
			} else {
				self._lastgroup = null;
			}
		});
	},
	get _getPos() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			return self._pos;
		});
	},
	get _setPos() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, val) {
			var __except0__ = (0, _orgTranscrypt__runtime__.AttributeError)('readonly attribute');
			__except0__.__cause__ = null;
			throw __except0__;
		});
	},
	get _getEndPos() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			return self._endpos;
		});
	},
	get _setEndPos() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, val) {
			var __except0__ = (0, _orgTranscrypt__runtime__.AttributeError)('readonly attribute');
			__except0__.__cause__ = null;
			throw __except0__;
		});
	},
	get _getRe() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			return self._re;
		});
	},
	get _setRe() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, val) {
			var __except0__ = (0, _orgTranscrypt__runtime__.AttributeError)('readonly attribute');
			__except0__.__cause__ = null;
			throw __except0__;
		});
	},
	get _getString() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			return self._string;
		});
	},
	get _setString() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, val) {
			var __except0__ = (0, _orgTranscrypt__runtime__.AttributeError)('readonly attribute');
			__except0__.__cause__ = null;
			throw __except0__;
		});
	},
	get _getLastGroup() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			return self._lastgroup;
		});
	},
	get _setLastGroup() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, val) {
			var __except0__ = (0, _orgTranscrypt__runtime__.AttributeError)('readonly attribute');
			__except0__.__cause__ = null;
			throw __except0__;
		});
	},
	get _getLastIndex() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			return self._lastindex;
		});
	},
	get _setLastIndex() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, val) {
			var __except0__ = (0, _orgTranscrypt__runtime__.AttributeError)('readonly attribute');
			__except0__.__cause__ = null;
			throw __except0__;
		});
	},
	get _lastMatchGroup() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			if ((0, _orgTranscrypt__runtime__.len)(self._obj) > 1) {
				for (var i = (0, _orgTranscrypt__runtime__.len)(self._obj) - 1; i > 0; i--) {
					if (self._obj[i] !== null) {
						return i;
					}
				}
				return null;
			} else {
				return null;
			}
		});
	},
	get expand() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, template) {
			var __except0__ = (0, _orgTranscrypt__runtime__.NotImplementedError)();
			__except0__.__cause__ = null;
			throw __except0__;
		});
	},
	get group() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			var args = (0, _orgTranscrypt__runtime__.tuple)([].slice.apply(arguments).slice(1));
			var ret = (0, _orgTranscrypt__runtime__.list)([]);
			if ((0, _orgTranscrypt__runtime__.len)(args) > 0) {
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = args[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var index = _step2.value;

						if ((0, _orgTranscrypt__runtime__.py_typeof)(index) === _orgTranscrypt__runtime__.str) {
							if (self._namedGroups !== null) {
								if (!(0, _orgTranscrypt__runtime__.__in__)(index, self._namedGroups.py_keys())) {
									var __except0__ = ReIndexError();
									__except0__.__cause__ = null;
									throw __except0__;
								}
								ret.append(self._obj[self._namedGroups[index]]);
							} else {
								var __except0__ = (0, _orgTranscrypt__runtime__.NotImplementedError)('No NamedGroups Available');
								__except0__.__cause__ = null;
								throw __except0__;
							}
						} else {
							if (index >= (0, _orgTranscrypt__runtime__.len)(self._obj)) {
								var __except0__ = ReIndexError();
								__except0__.__cause__ = null;
								throw __except0__;
							}
							ret.append(self._obj[index]);
						}
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
			} else {
				ret.append(self._obj[0]);
			}
			if ((0, _orgTranscrypt__runtime__.len)(ret) == 1) {
				return ret[0];
			} else {
				return (0, _orgTranscrypt__runtime__.tuple)(ret);
			}
		});
	},
	get groups() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, py_default) {
			if (typeof py_default == 'undefined' || py_default != null && py_default.hasOwnProperty("__kwargtrans__")) {
				;
				var py_default = null;
			};
			if ((0, _orgTranscrypt__runtime__.len)(self._obj) > 1) {
				var ret = self._obj.__getslice__(1, null, 1);
				return (0, _orgTranscrypt__runtime__.tuple)(function () {
					var __accu0__ = [];
					var _iteratorNormalCompletion3 = true;
					var _didIteratorError3 = false;
					var _iteratorError3 = undefined;

					try {
						for (var _iterator3 = ret[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
							var x = _step3.value;

							__accu0__.append(x !== null ? x : py_default);
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
				}());
			} else {
				return (0, _orgTranscrypt__runtime__.tuple)();
			}
		});
	},
	get groupdict() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, py_default) {
			if (typeof py_default == 'undefined' || py_default != null && py_default.hasOwnProperty("__kwargtrans__")) {
				;
				var py_default = null;
			};
			if (self._namedGroups !== null) {
				var ret = (0, _orgTranscrypt__runtime__.dict)({});
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = self._namedGroups.py_items()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var _ref3 = _step4.value;

						var _ref4 = _slicedToArray(_ref3, 2);

						var gName = _ref4[0];
						var gId = _ref4[1];

						var value = self._obj[gId];
						ret[gName] = value !== null ? value : py_default;
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

				return ret;
			} else {
				var __except0__ = (0, _orgTranscrypt__runtime__.NotImplementedError)('No NamedGroups Available');
				__except0__.__cause__ = null;
				throw __except0__;
			}
		});
	},
	get start() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, group) {
			if (typeof group == 'undefined' || group != null && group.hasOwnProperty("__kwargtrans__")) {
				;
				var group = 0;
			};
			var gId = 0;
			if ((0, _orgTranscrypt__runtime__.py_typeof)(group) === _orgTranscrypt__runtime__.str) {
				if (self._namedGroups !== null) {
					if (!(0, _orgTranscrypt__runtime__.__in__)(group, self._namedGroups.py_keys())) {
						var __except0__ = ReIndexError();
						__except0__.__cause__ = null;
						throw __except0__;
					}
					var gId = self._namedGroups[group];
				} else {
					var __except0__ = (0, _orgTranscrypt__runtime__.NotImplementedError)('No NamedGroups Available');
					__except0__.__cause__ = null;
					throw __except0__;
				}
			} else {
				var gId = group;
			}
			if (gId >= (0, _orgTranscrypt__runtime__.len)(self._obj)) {
				var __except0__ = ReIndexError();
				__except0__.__cause__ = null;
				throw __except0__;
			}
			if (gId == 0) {
				return self._obj.index;
			} else if (self._obj[gId] !== null) {
				var r = compile(escape(self._obj[gId]), self._re.flags);
				var m = r.search(self._obj[0]);
				if (m) {
					return self._obj.index + m.start();
				} else {
					var __except0__ = (0, _orgTranscrypt__runtime__.Exception)('Failed to find capture group');
					__except0__.__cause__ = null;
					throw __except0__;
				}
			} else {
				return -1;
			}
		});
	},
	get end() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, group) {
			if (typeof group == 'undefined' || group != null && group.hasOwnProperty("__kwargtrans__")) {
				;
				var group = 0;
			};
			var gId = 0;
			if ((0, _orgTranscrypt__runtime__.py_typeof)(group) === _orgTranscrypt__runtime__.str) {
				if (self._namedGroups !== null) {
					if (!(0, _orgTranscrypt__runtime__.__in__)(group, self._namedGroups.py_keys())) {
						var __except0__ = ReIndexError();
						__except0__.__cause__ = null;
						throw __except0__;
					}
					var gId = self._namedGroups[group];
				} else {
					var __except0__ = (0, _orgTranscrypt__runtime__.NotImplementedError)('No NamedGroups Available');
					__except0__.__cause__ = null;
					throw __except0__;
				}
			} else {
				var gId = group;
			}
			if (gId >= (0, _orgTranscrypt__runtime__.len)(self._obj)) {
				var __except0__ = ReIndexError();
				__except0__.__cause__ = null;
				throw __except0__;
			}
			if (gId == 0) {
				return self._obj.index + (0, _orgTranscrypt__runtime__.len)(self._obj[0]);
			} else if (self._obj[gId] !== null) {
				var r = compile(escape(self._obj[gId]), self._re.flags);
				var m = r.search(self._obj[0]);
				if (m) {
					return self._obj.index + m.end();
				} else {
					var __except0__ = (0, _orgTranscrypt__runtime__.Exception)('Failed to find capture group');
					__except0__.__cause__ = null;
					throw __except0__;
				}
			} else {
				return -1;
			}
		});
	},
	get span() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, group) {
			if (typeof group == 'undefined' || group != null && group.hasOwnProperty("__kwargtrans__")) {
				;
				var group = 0;
			};
			return (0, _orgTranscrypt__runtime__.tuple)([self.start(group), self.end(group)]);
		});
	}
});
Object.defineProperty(Match, 'pos', _orgTranscrypt__runtime__.property.call(Match, Match._getPos, Match._setPos));
Object.defineProperty(Match, 'endpos', _orgTranscrypt__runtime__.property.call(Match, Match._getEndPos, Match._setEndPos));
Object.defineProperty(Match, 're', _orgTranscrypt__runtime__.property.call(Match, Match._getRe, Match._setRe));
Object.defineProperty(Match, 'string', _orgTranscrypt__runtime__.property.call(Match, Match._getString, Match._setString));
Object.defineProperty(Match, 'lastgroup', _orgTranscrypt__runtime__.property.call(Match, Match._getLastGroup, Match._setLastGroup));
Object.defineProperty(Match, 'lastindex', _orgTranscrypt__runtime__.property.call(Match, Match._getLastIndex, Match._setLastIndex));
var Regex = exports.Regex = (0, _orgTranscrypt__runtime__.__class__)('Regex', [_orgTranscrypt__runtime__.object], {
	__module__: __name__,
	get __init__() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, pattern, flags) {
			if (!((flags & ASCII) > 0)) {
				flags |= UNICODE;
			}
			self._flags = flags;
			var __left0__ = self._compileWrapper(pattern, flags);
			self._jsFlags = __left0__[0];
			self._obj = __left0__[1];
			self._jspattern = pattern;
			self._pypattern = pattern;
			var __left0__ = self._compileWrapper(pattern + '|', flags);
			var _ = __left0__[0];
			var groupCounterRegex = __left0__[1];
			self._groups = groupCounterRegex.exec('').length - 1;
			self._groupindex = null;
		});
	},
	get _getPattern() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			var ret = self._pypattern.py_replace('\\', '\\\\');
			return ret;
		});
	},
	get _setPattern() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, val) {
			var __except0__ = (0, _orgTranscrypt__runtime__.AttributeError)('readonly attribute');
			__except0__.__cause__ = null;
			throw __except0__;
		});
	},
	get _getFlags() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			return self._flags;
		});
	},
	get _setFlags() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, val) {
			var __except0__ = (0, _orgTranscrypt__runtime__.AttributeError)('readonly attribute');
			__except0__.__cause__ = null;
			throw __except0__;
		});
	},
	get _getGroups() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			return self._groups;
		});
	},
	get _setGroups() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, val) {
			var __except0__ = (0, _orgTranscrypt__runtime__.AttributeError)('readonly attribute');
			__except0__.__cause__ = null;
			throw __except0__;
		});
	},
	get _getGroupIndex() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			if (self._groupindex === null) {
				return (0, _orgTranscrypt__runtime__.dict)({});
			} else {
				return self._groupindex;
			}
		});
	},
	get _setGroupIndex() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, val) {
			var __except0__ = (0, _orgTranscrypt__runtime__.AttributeError)('readonly attribute');
			__except0__.__cause__ = null;
			throw __except0__;
		});
	},
	get _compileWrapper() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, pattern, flags) {
			if (typeof flags == 'undefined' || flags != null && flags.hasOwnProperty("__kwargtrans__")) {
				;
				var flags = 0;
			};
			var jsFlags = self._convertFlags(flags);
			var rObj = null;
			var errObj = null;

			try {
				rObj = new RegExp(pattern, jsFlags);
			} catch (err) {
				errObj = err;
			}

			if (errObj !== null) {
				var __except0__ = error(errObj.message, errObj, pattern, flags);
				__except0__.__cause__ = null;
				throw __except0__;
			}
			return (0, _orgTranscrypt__runtime__.tuple)([jsFlags, rObj]);
		});
	},
	get _convertFlags() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, flags) {
			var bitmaps = (0, _orgTranscrypt__runtime__.list)([(0, _orgTranscrypt__runtime__.tuple)([DEBUG, '']), (0, _orgTranscrypt__runtime__.tuple)([IGNORECASE, 'i']), (0, _orgTranscrypt__runtime__.tuple)([MULTILINE, 'm']), (0, _orgTranscrypt__runtime__.tuple)([STICKY, 'y']), (0, _orgTranscrypt__runtime__.tuple)([GLOBAL, 'g']), (0, _orgTranscrypt__runtime__.tuple)([UNICODE, 'u'])]);
			var ret = ''.join(function () {
				var __accu0__ = [];
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {
					for (var _iterator5 = bitmaps[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var x = _step5.value;

						if ((x[0] & flags) > 0) {
							__accu0__.append(x[1]);
						}
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

				return __accu0__;
			}());
			return ret;
		});
	},
	get _getTargetStr() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, string, pos, endpos) {
			var endPtr = (0, _orgTranscrypt__runtime__.len)(string);
			if (endpos !== null) {
				if (endpos < endPtr) {
					var endPtr = endpos;
				}
			}
			if (endPtr < 0) {
				var endPtr = 0;
			}
			var ret = string.__getslice__(pos, endPtr, 1);
			return ret;
		});
	},
	get _patternHasCaptures() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			return self._groups > 0;
		});
	},
	get search() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, string, pos, endpos) {
			if (typeof pos == 'undefined' || pos != null && pos.hasOwnProperty("__kwargtrans__")) {
				;
				var pos = 0;
			};
			if (typeof endpos == 'undefined' || endpos != null && endpos.hasOwnProperty("__kwargtrans__")) {
				;
				var endpos = null;
			};
			if (endpos === null) {
				var endpos = (0, _orgTranscrypt__runtime__.len)(string);
			}
			var rObj = self._obj;
			var m = rObj.exec(string);
			if (m) {
				if (m.index < pos || m.index > endpos) {
					return null;
				} else {
					return Match(m, string, pos, endpos, self, self._groupindex);
				}
			} else {
				return null;
			}
		});
	},
	get match() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, string, pos, endpos) {
			if (typeof pos == 'undefined' || pos != null && pos.hasOwnProperty("__kwargtrans__")) {
				;
				var pos = 0;
			};
			if (typeof endpos == 'undefined' || endpos != null && endpos.hasOwnProperty("__kwargtrans__")) {
				;
				var endpos = null;
			};
			var target = string;
			if (endpos !== null) {
				var target = target.__getslice__(0, endpos, 1);
			} else {
				var endpos = (0, _orgTranscrypt__runtime__.len)(string);
			}
			var rObj = self._obj;
			var m = rObj.exec(target);
			if (m) {
				if (m.index == pos) {
					return Match(m, string, pos, endpos, self, self._groupindex);
				} else {
					return null;
				}
			} else {
				return null;
			}
		});
	},
	get fullmatch() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, string, pos, endpos) {
			if (typeof pos == 'undefined' || pos != null && pos.hasOwnProperty("__kwargtrans__")) {
				;
				var pos = 0;
			};
			if (typeof endpos == 'undefined' || endpos != null && endpos.hasOwnProperty("__kwargtrans__")) {
				;
				var endpos = null;
			};
			var target = string;
			var strEndPos = (0, _orgTranscrypt__runtime__.len)(string);
			if (endpos !== null) {
				var target = target.__getslice__(0, endpos, 1);
				var strEndPos = endpos;
			}
			var rObj = self._obj;
			var m = rObj.exec(target);
			if (m) {
				var obsEndPos = m.index + (0, _orgTranscrypt__runtime__.len)(m[0]);
				if (m.index == pos && obsEndPos == strEndPos) {
					return Match(m, string, pos, strEndPos, self, self._groupindex);
				} else {
					return null;
				}
			} else {
				return null;
			}
		});
	},
	get py_split() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, string, maxsplit) {
			if (typeof maxsplit == 'undefined' || maxsplit != null && maxsplit.hasOwnProperty("__kwargtrans__")) {
				;
				var maxsplit = 0;
			};
			if (maxsplit < 0) {
				return (0, _orgTranscrypt__runtime__.list)([string]);
			}
			var mObj = null;
			var rObj = self._obj;
			if (maxsplit == 0) {
				var mObj = string.py_split(rObj);
				return mObj;
			} else {
				var flags = self._flags;
				flags |= GLOBAL;
				var __left0__ = self._compileWrapper(self._jspattern, flags);
				var _ = __left0__[0];
				var rObj = __left0__[1];
				var ret = (0, _orgTranscrypt__runtime__.list)([]);
				var lastM = null;
				var cnt = 0;
				for (var i = 0; i < maxsplit; i++) {
					var m = rObj.exec(string);
					if (m) {
						cnt++;
						if (lastM !== null) {
							var start = lastM.index + (0, _orgTranscrypt__runtime__.len)(lastM[0]);
							var head = string.__getslice__(start, m.index, 1);
							ret.append(head);
							if ((0, _orgTranscrypt__runtime__.len)(m) > 1) {
								ret.extend(m.__getslice__(1, null, 1));
							}
						} else {
							var head = string.__getslice__(0, m.index, 1);
							ret.append(head);
							if ((0, _orgTranscrypt__runtime__.len)(m) > 1) {
								ret.extend(m.__getslice__(1, null, 1));
							}
						}
						var lastM = m;
					} else {
						break;
					}
				}
				if (lastM !== null) {
					var endPos = lastM.index + (0, _orgTranscrypt__runtime__.len)(lastM[0]);
					var end = string.__getslice__(endPos, null, 1);
					ret.append(end);
				}
				return ret;
			}
		});
	},
	get _findAllMatches() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, string, pos, endpos) {
			if (typeof pos == 'undefined' || pos != null && pos.hasOwnProperty("__kwargtrans__")) {
				;
				var pos = 0;
			};
			if (typeof endpos == 'undefined' || endpos != null && endpos.hasOwnProperty("__kwargtrans__")) {
				;
				var endpos = null;
			};
			var target = self._getTargetStr(string, pos, endpos);
			var flags = self._flags;
			flags |= GLOBAL;
			var __left0__ = self._compileWrapper(self._jspattern, flags);
			var _ = __left0__[0];
			var rObj = __left0__[1];
			var ret = (0, _orgTranscrypt__runtime__.list)([]);
			while (true) {
				var m = rObj.exec(target);
				if (m) {
					ret.append(m);
				} else {
					break;
				}
			}
			return ret;
		});
	},
	get findall() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, string, pos, endpos) {
			if (typeof pos == 'undefined' || pos != null && pos.hasOwnProperty("__kwargtrans__")) {
				;
				var pos = 0;
			};
			if (typeof endpos == 'undefined' || endpos != null && endpos.hasOwnProperty("__kwargtrans__")) {
				;
				var endpos = null;
			};
			var mlist = self._findAllMatches(string, pos, endpos);
			var mSelect = function mSelect(m) {
				if ((0, _orgTranscrypt__runtime__.len)(m) > 2) {
					return (0, _orgTranscrypt__runtime__.tuple)(m.__getslice__(1, null, 1));
				} else if ((0, _orgTranscrypt__runtime__.len)(m) == 2) {
					return m[1];
				} else {
					return m[0];
				}
			};
			var ret = (0, _orgTranscrypt__runtime__.map)(mSelect, mlist);
			return ret;
		});
	},
	get finditer() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, string, pos, endpos) {
			if (typeof endpos == 'undefined' || endpos != null && endpos.hasOwnProperty("__kwargtrans__")) {
				;
				var endpos = null;
			};
			var mlist = self._findAllMatches(string, pos, endpos);
			var ret = (0, _orgTranscrypt__runtime__.map)(function __lambda__(m) {
				return Match(m, string, 0, (0, _orgTranscrypt__runtime__.len)(string), self, self._groupindex);
			}, mlist);
			return (0, _orgTranscrypt__runtime__.py_iter)(ret);
		});
	},
	get sub() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, repl, string, count) {
			if (typeof count == 'undefined' || count != null && count.hasOwnProperty("__kwargtrans__")) {
				;
				var count = 0;
			};
			var __left0__ = self.subn(repl, string, count);
			var ret = __left0__[0];
			var _ = __left0__[1];
			return ret;
		});
	},
	get subn() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, repl, string, count) {
			if (typeof count == 'undefined' || count != null && count.hasOwnProperty("__kwargtrans__")) {
				;
				var count = 0;
			};
			var flags = self._flags;
			flags |= GLOBAL;
			var __left0__ = self._compileWrapper(self._jspattern, flags);
			var _ = __left0__[0];
			var rObj = __left0__[1];
			var ret = '';
			var totalMatch = 0;
			var lastEnd = -1;
			while (true) {
				if (count > 0) {
					if (totalMatch >= count) {
						if (lastEnd < 0) {
							return (0, _orgTranscrypt__runtime__.tuple)([ret, totalMatch]);
						} else {
							ret += string.__getslice__(lastEnd, m.index, 1);
							return (0, _orgTranscrypt__runtime__.tuple)([ret, totalMatch]);
						}
					}
				}
				var m = rObj.exec(string);
				if (m) {
					if (lastEnd < 0) {
						ret += string.__getslice__(0, m.index, 1);
					} else {
						ret += string.__getslice__(lastEnd, m.index, 1);
					}
					if ((0, _orgTranscrypt__runtime__.callable)(repl)) {
						var content = repl(Match(m, string, 0, (0, _orgTranscrypt__runtime__.len)(string), self, self._groupindex));
						ret += content;
					} else {
						ret += repl;
					}
					totalMatch++;
					var lastEnd = m.index + (0, _orgTranscrypt__runtime__.len)(m[0]);
				} else if (lastEnd < 0) {
					return (0, _orgTranscrypt__runtime__.tuple)([string, 0]);
				} else {
					ret += string.__getslice__(lastEnd, null, 1);
					return (0, _orgTranscrypt__runtime__.tuple)([ret, totalMatch]);
				}
			}
		});
	}
});
Object.defineProperty(Regex, 'pattern', _orgTranscrypt__runtime__.property.call(Regex, Regex._getPattern, Regex._setPattern));
Object.defineProperty(Regex, 'flags', _orgTranscrypt__runtime__.property.call(Regex, Regex._getFlags, Regex._setFlags));
Object.defineProperty(Regex, 'groups', _orgTranscrypt__runtime__.property.call(Regex, Regex._getGroups, Regex._setGroups));
Object.defineProperty(Regex, 'groupindex', _orgTranscrypt__runtime__.property.call(Regex, Regex._getGroupIndex, Regex._setGroupIndex));
var PyRegExp = exports.PyRegExp = (0, _orgTranscrypt__runtime__.__class__)('PyRegExp', [Regex], {
	__module__: __name__,
	get __init__() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, pyPattern, flags) {
			var __left0__ = (0, _reTranslate.translate)(pyPattern);
			var jsTokens = __left0__[0];
			var inlineFlags = __left0__[1];
			var namedGroups = __left0__[2];
			var nCapGroups = __left0__[3];
			var n_splits = __left0__[4];
			flags |= inlineFlags;
			var jsPattern = ''.join(jsTokens);
			Regex.__init__(self, jsPattern, flags);
			self._pypattern = pyPattern;
			self._nsplits = n_splits;
			self._jsTokens = jsTokens;
			self._capgroups = nCapGroups;
			self._groupindex = namedGroups;
		});
	}
});
var compile = exports.compile = function compile(pattern, flags) {
	if (typeof flags == 'undefined' || flags != null && flags.hasOwnProperty("__kwargtrans__")) {
		;
		var flags = 0;
	};
	if (flags & JSSTRICT) {
		var p = Regex(pattern, flags);
	} else {
		var p = PyRegExp(pattern, flags);
	}
	return p;
};
var search = exports.search = function search(pattern, string, flags) {
	if (typeof flags == 'undefined' || flags != null && flags.hasOwnProperty("__kwargtrans__")) {
		;
		var flags = 0;
	};
	var p = compile(pattern, flags);
	return p.search(string);
};
var match = exports.match = function match(pattern, string, flags) {
	if (typeof flags == 'undefined' || flags != null && flags.hasOwnProperty("__kwargtrans__")) {
		;
		var flags = 0;
	};
	var p = compile(pattern, flags);
	return p.match(string);
};
var fullmatch = exports.fullmatch = function fullmatch(pattern, string, flags) {
	if (typeof flags == 'undefined' || flags != null && flags.hasOwnProperty("__kwargtrans__")) {
		;
		var flags = 0;
	};
	var p = compile(pattern, flags);
	return p.fullmatch(string);
};
var py_split = exports.py_split = function py_split(pattern, string, maxsplit, flags) {
	if (typeof maxsplit == 'undefined' || maxsplit != null && maxsplit.hasOwnProperty("__kwargtrans__")) {
		;
		var maxsplit = 0;
	};
	if (typeof flags == 'undefined' || flags != null && flags.hasOwnProperty("__kwargtrans__")) {
		;
		var flags = 0;
	};
	var p = compile(pattern, flags);
	return p.py_split(string, maxsplit);
};
var findall = exports.findall = function findall(pattern, string, flags) {
	if (typeof flags == 'undefined' || flags != null && flags.hasOwnProperty("__kwargtrans__")) {
		;
		var flags = 0;
	};
	var p = compile(pattern, flags);
	return p.findall(string);
};
var finditer = exports.finditer = function finditer(pattern, string, flags) {
	if (typeof flags == 'undefined' || flags != null && flags.hasOwnProperty("__kwargtrans__")) {
		;
		var flags = 0;
	};
	var p = compile(pattern, flags);
	return p.finditer(string);
};
var sub = exports.sub = function sub(pattern, repl, string, count, flags) {
	if (typeof count == 'undefined' || count != null && count.hasOwnProperty("__kwargtrans__")) {
		;
		var count = 0;
	};
	if (typeof flags == 'undefined' || flags != null && flags.hasOwnProperty("__kwargtrans__")) {
		;
		var flags = 0;
	};
	var p = compile(pattern, flags);
	return p.sub(repl, string, count);
};
var subn = exports.subn = function subn(pattern, repl, string, count, flags) {
	if (typeof count == 'undefined' || count != null && count.hasOwnProperty("__kwargtrans__")) {
		;
		var count = 0;
	};
	if (typeof flags == 'undefined' || flags != null && flags.hasOwnProperty("__kwargtrans__")) {
		;
		var flags = 0;
	};
	var p = compile(pattern, flags);
	return p.subn(repl, string, count);
};
var escape = exports.escape = function escape(string) {
	var ret = null;
	var replfunc = function replfunc(m) {
		if (m[0] == '\\') {
			return '\\\\\\\\';
		} else {
			return '\\\\' + m[0];
		}
	};

	var r = /[^A-Za-z:;\d]/g;
	ret = string.replace(r, replfunc);

	if (ret !== null) {
		return ret;
	} else {
		var __except0__ = (0, _orgTranscrypt__runtime__.Exception)('Failed to escape the passed string');
		__except0__.__cause__ = null;
		throw __except0__;
	}
};
var purge = exports.purge = function purge() {
	// pass;
};

//# sourceMappingURL=re.map
