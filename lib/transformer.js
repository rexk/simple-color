'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hex = exports.rgb = exports.rgba = undefined;

var _Color = require('./Color');

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rgba(color /*: Color*/) /*: string*/ {
  var r = color.r;
  var g = color.g;
  var b = color.b;
  var a = color.a;

  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

/**
 * converts given Color instance into CSS rgb color representation.
 * @param  {Color} color  color
 * @return {}       [description]
 */

function rgb(color /*: Color*/) /*: string*/ {
  var r = color.r;
  var g = color.g;
  var b = color.b;

  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

/**
 * converts given color object into hex color representation.
 *
 * result string will not include alpha value.
 * @param  {Color} color  Color instance.
 * @return {string}       #{r}{g}{b}
 */
function hex(color /*: Color*/) /*: string*/ {
  var r = color.r.toString(16);
  var g = color.g.toString(16);
  var b = color.b.toString(16);
  return '#' + r + g + b;
}

exports.rgba = rgba;
exports.rgb = rgb;
exports.hex = hex;