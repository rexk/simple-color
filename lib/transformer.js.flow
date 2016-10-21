// @flow
import Color from './Color';

function rgba(color: Color): string {
  const { r, g, b, a } = color;
  return `rgba(${r},${g},${b},${a})`;
}

/**
 * converts given Color instance into CSS rgb color representation.
 * @param  {Color} color  color
 * @return {}       [description]
 */
function rgb(color: Color): string {
  const { r, g, b } = color;
  return `rgb(${r},${g},${b})`;
}

/**
 * converts given color object into hex color representation.
 *
 * result string will not include alpha value.
 * @param  {Color} color  Color instance.
 * @return {string}       #{r}{g}{b}
 */
function hex(color: Color): string {
  const r = color.r.toString(16);
  const g = color.g.toString(16);
  const b = color.b.toString(16);
  return `#${r}${g}${b}`;
}

export {
  rgba,
  rgb,
  hex
}
