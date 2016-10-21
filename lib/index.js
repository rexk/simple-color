'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DividersText = exports.HintText = exports.SecondaryText = exports.PrimaryText = exports.TextLevels = exports.shade = exports.tint = exports.palletes = exports.Color = exports.text = exports.hex = exports.rgb = exports.rgba = undefined;

var _Color = require('./Color');

var _Color2 = _interopRequireDefault(_Color);

var _pallete = require('./pallete');

var _pallete2 = _interopRequireDefault(_pallete);

var _shades = require('./shades');

var _text = require('./text');

var _transformer = require('./transformer');

var _TextLevel = require('./TextLevel');

var TextLevels = _interopRequireWildcard(_TextLevel);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.rgba = _transformer.rgba;
exports.rgb = _transformer.rgb;
exports.hex = _transformer.hex;
exports.text = _text.text;
exports.Color = _Color2.default;
exports.palletes = _pallete2.default;
exports.tint = _shades.tint;
exports.shade = _shades.shade;
exports.TextLevels = TextLevels;
exports.PrimaryText = _text.PrimaryText;
exports.SecondaryText = _text.SecondaryText;
exports.HintText = _text.HintText;
exports.DividersText = _text.DividersText;