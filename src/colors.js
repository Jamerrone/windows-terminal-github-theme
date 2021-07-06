import convert from "color-convert";
import darkColors from "@primer/primitives/dist/js/colors/dark.js";
import dimmedColors from "@primer/primitives/dist/js/colors/dark_dimmed.js";
import lightColors from "@primer/primitives/dist/js/colors/light.js";

export const getColors = (theme) => {
  if (theme === "light") {
    return lightColors;
  } else if (theme === "dark") {
    return darkColors;
  } else if (theme === "dimmed") {
    return dimmedColors;
  }
};

export const convertColor = (color) => {
  const hsl = color
    .match(/\(([^)]+)\)/)[1]
    .replaceAll("%", "")
    .split(",");

  hsl.pop();
  return `#${convert.hsl.hex(hsl)}`.toLowerCase();
};
