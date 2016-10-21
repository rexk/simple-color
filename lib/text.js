'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DividersText = exports.HintText = exports.SecondaryText = exports.PrimaryText = exports.text = exports.luma = exports.isBright = exports.isDark = undefined;

var _Color = require('./Color');

var _Color2 = _interopRequireDefault(_Color);

var _TextLevel = require('./TextLevel');

var TextLevels = _interopRequireWildcard(_TextLevel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*:: import type { TextLevel } from './TextLevel';*/


var Black = 0;
var White = 255;
var LumaPivot = 128;

/**
 * implmentation of CCIR 601.
 *
 * @see https://en.wikipedia.org/wiki/Rec._601
 *
 * @param  {Color} color  Color instance
 * @return {number}       luma value of the given color based on the implementation;
 */
function luma(color /*: Color*/) /*: number*/ {
  var r = color.r;
  var g = color.g;
  var b = color.b;

  return (299 * r + 587 * g + 114 * b) / 1000.0;
}

function isDark(color /*: Color*/) /*: boolean*/ {
  return luma(color) < LumaPivot;
}

function isBright(color /*: Color*/) /*: boolean*/ {
  return !isDark(color);
}

function darkOpacity(level /*: TextLevel*/) /*: number*/ {
  switch (level) {
    case TextLevels.SECONDARY:
      return 0.54;
    case TextLevels.HINT:
      return 0.34;
    case TextLevels.DIVIDERS:
      return 0.12;
    case TextLevels.PRIMARY:
    default:
      return 0.87;
  }
}

function brightOpacity(level /*: TextLevel*/) /*: number*/ {
  switch (level) {
    case TextLevels.SECONDARY:
      return 0.70;
    case TextLevels.HINT:
      return 0.50;
    case TextLevels.DIVIDERS:
      return 0.12;
    case TextLevels.PRIMARY:
    default:
      return 1.0;
  }
}

function darkText(color /*: Color*/, level /*: TextLevel*/) /*: Color*/ {
  var a = darkOpacity(level);
  return new _Color2.default({
    r: Black,
    g: Black,
    b: Black,
    a: a
  });
}

function brightText(color /*: Color*/, level /*: TextLevel*/) /*: Color*/ {
  var a = brightOpacity(level);
  return new _Color2.default({
    r: White,
    g: White,
    b: White,
    a: a
  });
}

function text(color /*: Color*/) /*: Color*/ {
  var level /*: TextLevel*/ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TextLevels.PRIMARY;

  var textColor = isDark(color) ? brightText : darkText;
  return textColor(color, level);
}

function PrimaryText(color /*: Color*/) /*: Color*/ {
  return text(color);
}

function SecondaryText(color /*: Color*/) /*: Color*/ {
  return text(color, TextLevels.SECONDARY);
}

function HintText(color /*: Color*/) /*: Color*/ {
  return text(color, TextLevels.HINT);
}

function DividersText(color /*: Color*/) /*: Color*/ {
  return text(color, TextLevels.DIVIDERS);
}

exports.isDark = isDark;
exports.isBright = isBright;
exports.luma = luma;
exports.text = text;
exports.PrimaryText = PrimaryText;
exports.SecondaryText = SecondaryText;
exports.HintText = HintText;
exports.DividersText = DividersText;