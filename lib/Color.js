"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*:: interface ColorType {
  r: number;
  g: number;
  b: number;
  a?: number;
}*/
/*:: interface IColor {
  r: number;
  g: number;
  b: number;
  a: number;
}*/


function getDefaultAlphs(a /*: ?number*/) /*: number*/ {
  if (a === undefined || a === null) {
    return 1;
  }

  return a;
}

var Color = function Color(color /*: ColorType*/) {
  _classCallCheck(this, Color);

  this.r = color.r;
  this.g = color.g;
  this.b = color.b;
  this.a = getDefaultAlphs(color.a);
};

Color.Black = new Color({ r: 0, g: 0, b: 0 });
Color.White = new Color({ r: 255, g: 255, b: 255 });
exports.default = Color;