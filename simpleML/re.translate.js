'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.translate = exports.shiftReduce = exports.shift = exports.Token = exports.splitIfElse = exports.getCaptureGroup = exports.countCaptureGroups = exports.generateGroupSpans = exports.Group = exports.stringFlags = exports.MAX_SHIFTREDUCE_LOOPS = exports.VERBOSE = undefined;

var _orgTranscrypt__runtime__ = require('./org.transcrypt.__runtime__.js');

var _re = require('./re.js');

var __module_re__ = _interopRequireWildcard(_re);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Transcrypt'ed from Python, 2018-11-27 16:09:18
var re = {};

(0, _orgTranscrypt__runtime__.__nest__)(re, '', __module_re__);
var __name__ = 're.translate';
var VERBOSE = exports.VERBOSE = false;
var MAX_SHIFTREDUCE_LOOPS = exports.MAX_SHIFTREDUCE_LOOPS = 1000;
var stringFlags = exports.stringFlags = 'aiLmsux';
var Group = exports.Group = (0, _orgTranscrypt__runtime__.__class__)('Group', [_orgTranscrypt__runtime__.object], {
	__module__: __name__,
	get __init__() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, start, end, klass) {
			self.start = start;
			self.end = end;
			self.klass = klass;
		});
	},
	get __repr__() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			return (0, _orgTranscrypt__runtime__.str)((0, _orgTranscrypt__runtime__.tuple)([self.start, self.end, self.klass]));
		});
	}
});
var generateGroupSpans = exports.generateGroupSpans = function generateGroupSpans(tokens) {
	var groupInfo = (0, _orgTranscrypt__runtime__.list)([]);
	var idx = 0;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var token = _step.value;

			if ((0, _orgTranscrypt__runtime__.__t__)(token.py_name.startswith('('))) {
				groupInfo.append(Group(idx, null, token.py_name));
			} else if ((0, _orgTranscrypt__runtime__.__t__)(token.py_name == ')')) {
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = (0, _orgTranscrypt__runtime__.py_reversed)(groupInfo)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var group = _step2.value;

						if ((0, _orgTranscrypt__runtime__.__t__)(group.end === null)) {
							group.end = idx;
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
			}
			idx++;
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

	return groupInfo;
};
var countCaptureGroups = exports.countCaptureGroups = function countCaptureGroups(tokens) {
	var groupInfo = generateGroupSpans(tokens);
	var count = 0;
	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = tokens[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var token = _step3.value;

			if ((0, _orgTranscrypt__runtime__.__t__)(token.py_name == '(')) {
				count++;
			}
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

	return count;
};
var getCaptureGroup = exports.getCaptureGroup = function getCaptureGroup(groupInfo, namedGroups, groupRef) {
	try {
		var id = (0, _orgTranscrypt__runtime__.int)(groupRef);
	} catch (__except0__) {
		var id = namedGroups[groupRef];
	}
	var search = 0;
	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = groupInfo[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var group = _step4.value;

			if ((0, _orgTranscrypt__runtime__.__t__)(group.klass == '(')) {
				search++;
				if ((0, _orgTranscrypt__runtime__.__t__)(search == id)) {
					return group;
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
};
var splitIfElse = exports.splitIfElse = function splitIfElse(tokens, namedGroups) {
	var variants = (0, _orgTranscrypt__runtime__.list)([]);
	var groupInfo = generateGroupSpans(tokens);
	var _iteratorNormalCompletion5 = true;
	var _didIteratorError5 = false;
	var _iteratorError5 = undefined;

	try {
		for (var _iterator5 = groupInfo[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
			var group = _step5.value;

			if ((0, _orgTranscrypt__runtime__.__t__)(group.klass == '(?<')) {
				var iff = tokens.__getslice__(0, null, 1);
				var els = tokens.__getslice__(0, null, 1);
				var conStart = group.start;
				var conEnd = group.end;
				var ref = tokens[conStart + 1].py_name;
				var captureGroup = getCaptureGroup(groupInfo, namedGroups, ref);
				var captureGroupModifier = tokens[captureGroup.end + 1];
				if ((0, _orgTranscrypt__runtime__.__t__)((0, _orgTranscrypt__runtime__.__t__)((0, _orgTranscrypt__runtime__.__in__)(captureGroupModifier.py_name, (0, _orgTranscrypt__runtime__.list)(['?', '*']))) || captureGroupModifier.py_name.startswith('{0,'))) {
					if ((0, _orgTranscrypt__runtime__.__t__)(captureGroupModifier.py_name == '?')) {
						iff[captureGroup.end + 1] = null;
					} else if ((0, _orgTranscrypt__runtime__.__t__)(captureGroupModifier.py_name == '*')) {
						iff[captureGroup.end + 1] = Token('+');
					} else if ((0, _orgTranscrypt__runtime__.__t__)(captureGroupModifier.py_name.startswith('{0,'))) {
						iff[captureGroup.end + 1].py_name.__setslice__(0, 3, null, '{1,');
					}
					els[captureGroup.end + 1] = null;
					var hasElse = false;
					for (var idx = conStart; idx < conEnd; idx++) {
						if ((0, _orgTranscrypt__runtime__.__t__)(tokens[idx].py_name == '|')) {
							var hasElse = true;
							els.py_pop(conEnd);
							iff.__setslice__(idx, conEnd + 1, null, (0, _orgTranscrypt__runtime__.list)([]));
							els.__setslice__(conStart, idx + 1, null, (0, _orgTranscrypt__runtime__.list)([]));
							break;
						}
					}
					if ((0, _orgTranscrypt__runtime__.__t__)(!(0, _orgTranscrypt__runtime__.__t__)(hasElse))) {
						els.__setslice__(conStart, conEnd + 1, null, (0, _orgTranscrypt__runtime__.list)([]));
						iff.py_pop(conEnd);
					}
					iff.__setslice__(conStart, conStart + 3, null, (0, _orgTranscrypt__runtime__.list)([]));
					els.__setslice__(captureGroup.start, captureGroup.end + 1, null, (0, _orgTranscrypt__runtime__.list)([Token('('), Token(')')]));
					iff.remove(null);
					els.remove(null);
					variants.append(iff);
					variants.append(els);
				} else {
					var pastIff = false;
					for (var idx = conStart; idx < conEnd; idx++) {
						if ((0, _orgTranscrypt__runtime__.__t__)(iff[idx].py_name == '|')) {
							var iff = tokens.__getslice__(0, idx, 1);
							iff.extend(tokens.__getslice__(conEnd + 1, null, 1));
							break;
						}
					}
					iff.__setslice__(conStart, conStart + 3, null, (0, _orgTranscrypt__runtime__.list)([]));
					variants.append(iff);
				}
				break;
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

	if ((0, _orgTranscrypt__runtime__.__t__)(!(0, _orgTranscrypt__runtime__.__t__)(variants))) {
		return (0, _orgTranscrypt__runtime__.list)([tokens]);
	}
	var allVariants = (0, _orgTranscrypt__runtime__.list)([]);
	var _iteratorNormalCompletion6 = true;
	var _didIteratorError6 = false;
	var _iteratorError6 = undefined;

	try {
		for (var _iterator6 = variants[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
			var variant = _step6.value;

			allVariants.extend(splitIfElse(variant, namedGroups));
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

	return allVariants;
};
var Token = exports.Token = (0, _orgTranscrypt__runtime__.__class__)('Token', [_orgTranscrypt__runtime__.object], {
	__module__: __name__,
	get __init__() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self, py_name, paras, pure) {
			if (typeof paras == 'undefined' || paras != null && paras.hasOwnProperty("__kwargtrans__")) {
				;
				var paras = null;
			};
			if (typeof pure == 'undefined' || pure != null && pure.hasOwnProperty("__kwargtrans__")) {
				;
				var pure = false;
			};
			if ((0, _orgTranscrypt__runtime__.__t__)(paras === null)) {
				var paras = (0, _orgTranscrypt__runtime__.list)([]);
			}
			self.py_name = py_name;
			self.paras = paras;
			self.pure = pure;
			self.isModeGroup = false;
		});
	},
	get __repr__() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			return self.py_name;
		});
	},
	get resolve() {
		return (0, _orgTranscrypt__runtime__.__get__)(this, function (self) {
			var paras = '';
			var _iteratorNormalCompletion7 = true;
			var _didIteratorError7 = false;
			var _iteratorError7 = undefined;

			try {
				for (var _iterator7 = self.paras[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
					var para = _step7.value;

					paras += (0, _orgTranscrypt__runtime__.str)(para);
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

			return self.py_name + paras;
		});
	}
});
var shift = exports.shift = function shift(stack, queue) {
	var done = !(0, _orgTranscrypt__runtime__.__t__)((0, _orgTranscrypt__runtime__.bool)(queue));
	if ((0, _orgTranscrypt__runtime__.__t__)(!(0, _orgTranscrypt__runtime__.__t__)(done))) {
		stack.append(Token(queue[0], (0, _orgTranscrypt__runtime__.list)([]), true));
		var queue = queue.__getslice__(1, null, 1);
	}
	return (0, _orgTranscrypt__runtime__.tuple)([stack, queue, done]);
};
var shiftReduce = exports.shiftReduce = function shiftReduce(stack, queue, namedGroups, flags) {
	var done = false;
	var high = (0, _orgTranscrypt__runtime__.len)(stack) - 1;
	if ((0, _orgTranscrypt__runtime__.__t__)((0, _orgTranscrypt__runtime__.len)(stack) < 2)) {
		var __left0__ = shift(stack, queue);
		var stack = __left0__[0];
		var queue = __left0__[1];
		var done = __left0__[2];
		return (0, _orgTranscrypt__runtime__.tuple)([stack, queue, flags, done]);
	}
	var s0 = (0, _orgTranscrypt__runtime__.__t__)((0, _orgTranscrypt__runtime__.len)(stack) > 0) ? stack[high] : Token('');
	var s1 = (0, _orgTranscrypt__runtime__.__t__)((0, _orgTranscrypt__runtime__.len)(stack) > 1) ? stack[high - 1] : Token('');
	if ((0, _orgTranscrypt__runtime__.__t__)(VERBOSE)) {
		var _iteratorNormalCompletion8 = true;
		var _didIteratorError8 = false;
		var _iteratorError8 = undefined;

		try {
			for (var _iterator8 = stack[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
				var token = _step8.value;

				console.log(token.resolve(), '\t', (0, _orgTranscrypt__runtime__.__kwargtrans__)({ end: '' }));
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

		console.log('');
	}
	if ((0, _orgTranscrypt__runtime__.__t__)(s1.py_name == '\\')) {
		if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == 'A')) {
			stack.__setslice__(-(0, _orgTranscrypt__runtime__.__t__)(2), null, null, (0, _orgTranscrypt__runtime__.list)([Token('^')]));
		} else if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == 'a')) {
			stack.__setslice__(-(0, _orgTranscrypt__runtime__.__t__)(2), null, null, (0, _orgTranscrypt__runtime__.list)([Token('\\07')]));
		} else if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == 'Z')) {
			stack.__setslice__(-(0, _orgTranscrypt__runtime__.__t__)(2), null, null, (0, _orgTranscrypt__runtime__.list)([Token('$')]));
		} else {
			stack.__setslice__(-(0, _orgTranscrypt__runtime__.__t__)(2), null, null, (0, _orgTranscrypt__runtime__.list)([Token('\\' + s0.py_name)]));
		}
	} else if ((0, _orgTranscrypt__runtime__.__t__)((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == '$') && s0.pure)) {
		stack.py_pop();
		stack.extend((0, _orgTranscrypt__runtime__.list)([Token('(?='), Token('\\n'), Token('?'), Token('$'), Token(')')]));
	} else if ((0, _orgTranscrypt__runtime__.__t__)(s1.py_name == '{')) {
		if ((0, _orgTranscrypt__runtime__.__t__)((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == ',') && (0, _orgTranscrypt__runtime__.len)(s1.paras) == 0)) {
			s1.paras.append('0');
			s1.paras.append(',');
		} else if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == '}')) {
			s1.paras.append('}');
			s1.py_name = s1.resolve();
			s1.paras = (0, _orgTranscrypt__runtime__.list)([]);
		} else {
			s1.paras.append(s0.py_name);
		}
		var stack = stack.__getslice__(0, -(0, _orgTranscrypt__runtime__.__t__)(1), 1);
	} else if ((0, _orgTranscrypt__runtime__.__t__)((0, _orgTranscrypt__runtime__.__t__)(s1.py_name == '[') && s0.py_name == '^')) {
		stack.__setslice__(-(0, _orgTranscrypt__runtime__.__t__)(2), null, null, (0, _orgTranscrypt__runtime__.list)([Token('[^')]));
	} else if ((0, _orgTranscrypt__runtime__.__t__)((0, _orgTranscrypt__runtime__.__t__)(s1.py_name == '(') && s0.py_name == '?')) {
		stack.__setslice__(-(0, _orgTranscrypt__runtime__.__t__)(2), null, null, (0, _orgTranscrypt__runtime__.list)([Token('(?')]));
	} else if ((0, _orgTranscrypt__runtime__.__t__)((0, _orgTranscrypt__runtime__.__t__)((0, _orgTranscrypt__runtime__.__in__)(s1.py_name, (0, _orgTranscrypt__runtime__.list)(['*', '+', '?']))) && s0.py_name == '?')) {
		stack.__setslice__(-(0, _orgTranscrypt__runtime__.__t__)(2), null, null, (0, _orgTranscrypt__runtime__.list)([Token(s1.py_name + '?')]));
	} else if ((0, _orgTranscrypt__runtime__.__t__)((0, _orgTranscrypt__runtime__.__t__)(s1.isModeGroup) && s0.py_name == ')')) {
		var stack = stack.__getslice__(0, -(0, _orgTranscrypt__runtime__.__t__)(2), 1);
	} else if ((0, _orgTranscrypt__runtime__.__t__)(s1.py_name == '(?')) {
		if ((0, _orgTranscrypt__runtime__.__t__)((0, _orgTranscrypt__runtime__.__in__)(s0.py_name, stringFlags))) {
			if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == 'i')) {
				flags |= re.IGNORECASE;
			} else if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == 'L')) {
				flags |= re.LOCALE;
			} else if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == 'm')) {
				flags |= re.MULTILINE;
			} else if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == 's')) {
				flags |= re.DOTALL;
			} else if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == 'u')) {
				flags |= re.UNICODE;
			} else if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == 'x')) {
				flags |= re.VERBOSE;
			} else if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == 'a')) {
				flags |= re.ASCII;
			}
			stack.py_pop();
			s1.isModeGroup = true;
		} else {
			if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == '(')) {
				s0.py_name = '<';
			}
			var newToken = Token('(?' + s0.py_name);
			stack.__setslice__(-(0, _orgTranscrypt__runtime__.__t__)(2), null, null, (0, _orgTranscrypt__runtime__.list)([newToken]));
		}
	} else if ((0, _orgTranscrypt__runtime__.__t__)(s1.py_name == '(?<')) {
		if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == ')')) {
			stack.__setslice__(-(0, _orgTranscrypt__runtime__.__t__)(1), null, null, (0, _orgTranscrypt__runtime__.list)([Token(''.join(s1.paras)), Token('>')]));
			s1.paras = (0, _orgTranscrypt__runtime__.list)([]);
		} else {
			s1.paras.append(s0.py_name);
			stack.py_pop();
		}
	} else if ((0, _orgTranscrypt__runtime__.__t__)(s1.py_name == '(?P')) {
		stack.__setslice__(-(0, _orgTranscrypt__runtime__.__t__)(2), null, null, (0, _orgTranscrypt__runtime__.list)([Token('(?P' + s0.py_name)]));
	} else if ((0, _orgTranscrypt__runtime__.__t__)(s1.py_name == '(?P<')) {
		if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == '>')) {
			namedGroups[''.join(s1.paras)] = countCaptureGroups(stack) + 1;
			stack.__setslice__(-(0, _orgTranscrypt__runtime__.__t__)(2), null, null, (0, _orgTranscrypt__runtime__.list)([Token('(')]));
		} else {
			s1.paras.append(s0.py_name);
			stack.py_pop();
		}
	} else if ((0, _orgTranscrypt__runtime__.__t__)(s1.py_name == '(?P=')) {
		if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == ')')) {
			stack.__setslice__(-(0, _orgTranscrypt__runtime__.__t__)(2), null, null, (0, _orgTranscrypt__runtime__.list)([Token('\\' + (0, _orgTranscrypt__runtime__.str)(namedGroups[s1.paras[0]]))]));
		} else if ((0, _orgTranscrypt__runtime__.__t__)(!(0, _orgTranscrypt__runtime__.__t__)(s1.paras))) {
			s1.paras.append(s0.py_name);
			stack.py_pop();
		} else {
			s1.paras[0] += s0.py_name;
			stack.py_pop();
		}
	} else if ((0, _orgTranscrypt__runtime__.__t__)(s1.py_name == '(?#')) {
		if ((0, _orgTranscrypt__runtime__.__t__)(s0.py_name == ')')) {
			var stack = stack.__getslice__(0, -(0, _orgTranscrypt__runtime__.__t__)(2), 1);
		} else {
			var stack = stack.__getslice__(0, -(0, _orgTranscrypt__runtime__.__t__)(1), 1);
		}
	} else {
		var __left0__ = shift(stack, queue);
		var stack = __left0__[0];
		var queue = __left0__[1];
		var done = __left0__[2];
	}
	return (0, _orgTranscrypt__runtime__.tuple)([stack, queue, flags, done]);
};
var translate = exports.translate = function translate(rgx) {
	var stack = (0, _orgTranscrypt__runtime__.list)([]);
	var queue = (0, _orgTranscrypt__runtime__.list)(rgx);
	var flags = 0;
	var namedGroups = (0, _orgTranscrypt__runtime__.dict)();
	var nloop = 0;
	while ((0, _orgTranscrypt__runtime__.__t__)(true)) {
		nloop++;
		if ((0, _orgTranscrypt__runtime__.__t__)(nloop > MAX_SHIFTREDUCE_LOOPS)) {
			var __except0__ = (0, _orgTranscrypt__runtime__.Exception)();
			__except0__.__cause__ = null;
			throw __except0__;
		}
		var __left0__ = shiftReduce(stack, queue, namedGroups, flags);
		var stack = __left0__[0];
		var queue = __left0__[1];
		var flags = __left0__[2];
		var done = __left0__[3];
		if ((0, _orgTranscrypt__runtime__.__t__)(done)) {
			break;
		}
	}
	var variants = splitIfElse(stack, namedGroups);
	var n_splits = (0, _orgTranscrypt__runtime__.len)(variants);
	var final = (0, _orgTranscrypt__runtime__.list)([]);
	for (var i = 0; i < (0, _orgTranscrypt__runtime__.len)(variants); i++) {
		final.extend(variants[i]);
		if ((0, _orgTranscrypt__runtime__.__t__)(i < (0, _orgTranscrypt__runtime__.len)(variants) - 1)) {
			final.append(Token('|'));
		}
	}
	var stack = final;
	var groupInfo = generateGroupSpans(stack);
	var resolvedTokens = (0, _orgTranscrypt__runtime__.list)([]);
	var _iteratorNormalCompletion9 = true;
	var _didIteratorError9 = false;
	var _iteratorError9 = undefined;

	try {
		for (var _iterator9 = stack[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
			var token = _step9.value;

			var stringed = token.resolve();
			if ((0, _orgTranscrypt__runtime__.__t__)((0, _orgTranscrypt__runtime__.__t__)(flags & re.DOTALL) && stringed == '.')) {
				var stringed = '[\\s\\S]';
			}
			resolvedTokens.append(stringed);
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

	return (0, _orgTranscrypt__runtime__.tuple)([resolvedTokens, flags, namedGroups, countCaptureGroups(stack), n_splits]);
};

//# sourceMappingURL=re.translate.map
