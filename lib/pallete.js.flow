// @flow
import Color from './Color';
import { tint, shade } from './shades';

type ColorMap = {
  [key: string]: Color;
}

const Total = 500;

const tints: Array<number> = (function iterate() {
  const result = [50];
  for (let i = 100; i < 500; i = i + 100) {
    result.push(i);
  }
  return result;
})();

const shades: Array<number> = (function iterate() {
  const result = [];
  for (let i = 600; i < 1000; i = i + 100) {
    result.push(i);
  }
  return result;
})();

export default function palletes(primary: Color): ColorMap {
  const result: ColorMap = {};

  for (let i = 0; i < shades.length; i++) {
    const id = shades[i];
    const factor = (id - Total) / Total * 0.6;
    result[String(id)] = shade(primary, factor);
  }

  // for (let i = 0; i < tints.length; i++) {
  //   const id = tints[i];
  //   const factor = id / Total;
  //   result[String(id)] = shade(primary, factor);
  // }
  //
  for (let i = 0; i < tints.length; i++) {
    const id = tints[i];
    // const factor = (1000 - id) / Total;
    // const factor = ((Total / 2) - id) / Total;
    const factor = ((Total) - id) / Total;
    result[String(id)] = tint(primary, factor);
  }

  result['500'] = primary;
  return result;
}
