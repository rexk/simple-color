// @flow
import Color from './Color';
import type { TextLevel } from './TextLevel';
import * as TextLevels from './TextLevel';

const Black = 0;
const White = 255;
const LumaPivot = 128;

/**
 * implmentation of CCIR 601.
 *
 * @see https://en.wikipedia.org/wiki/Rec._601
 *
 * @param  {Color} color  Color instance
 * @return {number}       luma value of the given color based on the implementation;
 */
function luma(color: Color): number {
  const { r, g, b } = color;
  return (299 * r + 587 * g + 114 * b) / 1000.0;
}

function isDark(color: Color): boolean {
  return luma(color) < LumaPivot;
}

function isBright(color: Color): boolean {
  return !isDark(color);
}

function darkOpacity(level: TextLevel): number {
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

function brightOpacity(level: TextLevel): number {
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

function darkText(color: Color, level: TextLevel): Color {
  const a = darkOpacity(level);
  return new Color({
    r: Black,
    g: Black,
    b: Black,
    a,
  });
}

function brightText(color: Color, level: TextLevel): Color {
  const a = brightOpacity(level);
  return new Color({
    r: White,
    g: White,
    b: White,
    a,
  });
}

function text(color: Color, level: TextLevel = TextLevels.PRIMARY): Color {
  const textColor = isDark(color) ? brightText : darkText;
  return textColor(color, level);
}

function PrimaryText(color: Color): Color {
  return text(color);
}

function SecondaryText(color: Color): Color {
  return text(color, TextLevels.SECONDARY);
}

function HintText(color: Color): Color {
  return text(color, TextLevels.HINT);
}

function DividersText(color: Color): Color {
  return text(color, TextLevels.DIVIDERS);
}

export {
  isDark,
  isBright,
  luma,
  text,
  PrimaryText,
  SecondaryText,
  HintText,
  DividersText
};
