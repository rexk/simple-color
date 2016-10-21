// @flow
import {
  Color,
  palletes,
  text,
  rgba,
  hex,
} from '../';

const primary = new Color({ r: 244, g: 67, b: 54 });
const Red = palletes(primary);
const color = Red['500'];

const Keys = ['50'];
for (let i = 100; i < 1000; i = i + 100) {
  Keys.push(String(i));
}

Keys.forEach(key => {
  const color = Red[key];
  console.log(`${key}: ${hex(color)}`);
});
