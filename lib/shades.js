'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shade = exports.tint = undefined;

var _Color = require('./Color');

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Black = 0;
// @see http://stackoverflow.com/questions/6615002/given-an-rgb-value-how-do-i-create-a-tint-or-shade

var White = 255;

function clamp(value /*: number*/, min /*: number*/, max /*: number*/) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}

function calc(destination /*: number*/) {
  return function nextColor(current /*: number*/, factor /*: number*/) {
    var newValue = clamp(current + (destination - current) * factor, Black, White);
    return Math.round(newValue);
  };
}

var shadeComponent = calc(Black);
var tintComponent = calc(White);

function tint(color /*: Color*/, factor /*: number*/) /*: Color*/ {
  var r = color.r;
  var g = color.g;
  var b = color.b;
  var a = color.a;

  return new _Color2.default({
    r: tintComponent(r, factor),
    g: tintComponent(g, factor),
    b: tintComponent(b, factor),
    a: a
  });
}

function shade(color /*: Color*/, factor /*: number*/) /*: Color*/ {
  var r = color.r;
  var g = color.g;
  var b = color.b;
  var a = color.a;

  return new _Color2.default({
    r: shadeComponent(r, factor),
    g: shadeComponent(g, factor),
    b: shadeComponent(b, factor),
    a: a
  });
}

exports.tint = tint;
exports.shade = shade;