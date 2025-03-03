import {
  createGlobalTheme,
  createGlobalThemeContract,
  fontFace,
  globalStyle,
  layer,
} from "@vanilla-extract/css";
import { radii } from "./radii";
import { space } from "./space";
import { sizes } from "./sizes";
import { lineHeights } from "./line-heights";
import { fontSizes } from "./font-sizes";
import { fontWeights } from "./font-weights";
import { letterSpacings } from "./letter-spacings";
import { primitives, semantics } from "./colors";
import { kebabCase } from "~/utils/strings";
// import "./normailize.css";

const PREFIX = "vapor";
export const vapor = layer();
export const vars = createGlobalThemeContract(
  {
    asdf: {
      a: "",
    },
    radii: {
      "000": "",
      "050": "",
      "100": "",
      "200": "",
      "300": "",
      "400": "",
      "500": "",
      "600": "",
      "700": "",
      "800": "",
      "900": "",
    },
    space: {
      "000": "",
      "025": "",
      "050": "",
      "075": "",
      "100": "",
      "150": "",
      "175": "",
      "200": "",
      "225": "",
      "250": "",
      "300": "",
      "400": "",
      "500": "",
      "600": "",
      "700": "",
      "800": "",
      "900": "",
    },
    sizes: {
      "025": "",
      "050": "",
      "075": "",
      "100": "",
      "150": "",
      "175": "",
      "200": "",
      "225": "",
      "250": "",
      "300": "",
      "400": "",
      "500": "",
      "600": "",
      "700": "",
      "800": "",
    },
    lineHeights: {
      "025": "",
      "050": "",
      "075": "",
      "100": "",
      "200": "",
      "300": "",
      "400": "",
      "500": "",
      "600": "",
      "700": "",
      "800": "",
      "900": "",
      "1000": "",
    },
    fontSizes: {
      "025": "",
      "050": "",
      "075": "",
      "100": "",
      "200": "",
      "300": "",
      "400": "",
      "500": "",
      "600": "",
      "700": "",
      "800": "",
      "900": "",
      "1000": "",
    },
    fontWeights: {
      "400": "",
      "500": "",
      "700": "",
      "800": "",
    },
    letterSpacings: {
      d1: "",
      d2: "",
      d3: "",
      d4: "",
      h1: "",
      h2: "",
      h3: "",
      h4: "",
      h5: "",
      h6: "",
      s1: "",
      s2: "",
      b1: "",
      b2: "",
      b3: "",
      b4: "",
      c1: "",
      c2: "",
    },

    colors: {
      ...primitives,
      ...semantics,
    },
  },
  (_, [token, value]) => `${PREFIX}-${kebabCase(token || "")}-${value}`
);

createGlobalTheme(":root", vars, {
  asdf: {
    a: "#eeeeee",
  },

  radii,
  space,
  sizes,
  lineHeights,
  fontSizes,
  fontWeights,
  letterSpacings,

  colors: {
    ...primitives,
    ...semantics,
  },
});

const pretendard = fontFace([
  {
    src: 'local("Pretendard")',
  },
]);

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  fontFamily: `${pretendard}, -apple₩-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
});
