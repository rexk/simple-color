/* @flow */
interface ColorType {
  r: number;
  g: number;
  b: number;
  a?: number;
}

interface IColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

function getDefaultAlphs(a: ?number): number {
  if (a === undefined || a === null) {
    return 1;
  }

  return a;
}

class Color {
  r: number;
  g: number;
  b: number;
  a: number;

  constructor(color: ColorType) {
    this.r = color.r;
    this.g = color.g;
    this.b = color.b;
    this.a = getDefaultAlphs(color.a);
  }

  static Black: Color = new Color({ r: 0, g: 0, b: 0 });
  static White: IColor = new Color({ r: 255, g: 255, b: 255 });
}

export default Color;
