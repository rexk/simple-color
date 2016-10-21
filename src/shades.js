// @flow
// @see http://stackoverflow.com/questions/6615002/given-an-rgb-value-how-do-i-create-a-tint-or-shade
import Color from './Color';

const Black = 0;
const White = 255;

function clamp(value: number, min: number, max: number) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}

function calc(destination: number) {
  return function nextColor(current: number, factor: number) {
    const newValue = clamp(current + (destination - current) * factor, Black, White);
    return Math.round(newValue);
  };
}

const shadeComponent = calc(Black);
const tintComponent = calc(White);

function tint(color: Color, factor: number): Color {
  const { r, g, b, a } = color;
  return new Color({
    r: tintComponent(r, factor),
    g: tintComponent(g, factor),
    b: tintComponent(b, factor),
    a: a,
  });
}

function shade(color: Color, factor: number): Color {
  const { r, g, b, a } = color;
  return new Color({
    r: shadeComponent(r, factor),
    g: shadeComponent(g, factor),
    b: shadeComponent(b, factor),
    a: a,
  });
}

export {
  tint,
  shade,
}
