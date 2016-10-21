// @flow
import {
  Color,
  palletes,
  text,
  rgba,
  hex,
} from '../src';

type PrimaryColor = {
  name: string;
  primary: Color;
};

function generate(obj: PrimaryColor) {
  return {
    name: obj.name,
    colors: palletes(obj.primary)
  };
}

function generateFromList(obj: Array<PrimaryColor>) {
  return obj.map(p => generate(p));
}

export default generateFromList;
