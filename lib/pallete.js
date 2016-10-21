'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = palletes;

var _Color = require('./Color');

var _Color2 = _interopRequireDefault(_Color);

var _shades = require('./shades');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*:: type ColorMap = {
  [key: string]: Color;
}*/


var Total = 500;

var tints /*: Array<number>*/ = function iterate() {
  var result = [50];
  for (var i = 100; i < 500; i = i + 100) {
    result.push(i);
  }
  return result;
}();

var shades /*: Array<number>*/ = function iterate() {
  var result = [];
  for (var i = 600; i < 1000; i = i + 100) {
    result.push(i);
  }
  return result;
}();

function palletes(primary /*: Color*/) /*: ColorMap*/ {
  var result /*: ColorMap*/ = {};

  for (var i = 0; i < shades.length; i++) {
    var id = shades[i];
    var factor = (id - Total) / Total * 0.6;
    result[String(id)] = (0, _shades.shade)(primary, factor);
  }

  // for (let i = 0; i < tints.length; i++) {
  //   const id = tints[i];
  //   const factor = id / Total;
  //   result[String(id)] = shade(primary, factor);
  // }
  //
  for (var _i = 0; _i < tints.length; _i++) {
    var _id = tints[_i];
    // const factor = (1000 - id) / Total;
    // const factor = ((Total / 2) - id) / Total;
    var _factor = (Total - _id) / Total;
    result[String(_id)] = (0, _shades.tint)(primary, _factor);
  }

  result['500'] = primary;
  return result;
}