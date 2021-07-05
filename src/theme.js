import { getColors, convertColor } from "./colors.js";

export const getTheme = (theme) => {
  const color = getColors(theme).default;

  return formatTheme({
    background: color.bg.canvasInset,
    black: color.ansi.black,
    blue: color.ansi.blue,
    brightBlack: color.ansi.blackBright,
    brightBlue: color.ansi.blueBright,
    brightCyan: color.ansi.cyanBright,
    brightGreen: color.ansi.greenBright,
    brightPurple: color.ansi.magentaBright,
    brightRed: color.ansi.redBright,
    brightWhite: color.ansi.whiteBright,
    brightYellow: color.ansi.yellowBright,
    cursorColor: color.ansi.white,
    cyan: color.ansi.cyan,
    foreground: color.text.secondary,
    green: color.ansi.green,
    name: `GitHub ${theme[0].toUpperCase() + theme.slice(1)}`,
    purple: color.ansi.magenta,
    red: color.ansi.red,
    selectionBackground: color.ansi.white,
    white: color.ansi.white,
    yellow: color.ansi.yellow,
  });
};

const formatTheme = (theme) => {
  return Object.fromEntries(
    Object.entries(theme).map(([k, v]) => [
      k,
      v.startsWith("hsl") ? convertColor(v) : v,
    ])
  );
};
