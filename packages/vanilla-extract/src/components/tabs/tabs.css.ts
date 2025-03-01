import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

export const root = style({
  display: "flex",
  width: "100%",
});

export const rootOrientation = styleVariants({
  horizontal: { flexDirection: "column" },
  vertical: { flexDirection: "row" },
});

export const list = style({
  position: "relative",

  display: "flex",
  alignItems: "start",
  gap: vars.space[100],
});

export const positions = styleVariants({
  start: { justifyContent: "start" },
  center: { justifyContent: "center" },
});

export const listOrientation = styleVariants({
  horizontal: {
    flexDirection: "row",
    flex: 1,

    minWidth: "min-content",
    maxWidth: "100%",
    paddingInline: vars.space[300],

    selectors: {
      "&[data-has-border]::after": {
        content: "",

        position: "absolute",
        left: 0,
        bottom: "-0.0625rem",

        width: "100%",
        height: "0.0625rem",

        backgroundColor: vars.colors["border-color"],
      },
    },
  },
  vertical: {
    flexDirection: "column",

    paddingBlock: vars.space[300],
    borderRight: "0.0625rem solid transparent",

    selectors: {
      "&[data-has-border]": {
        borderRight: `0.0625rem solid ${vars.colors["border-color"]}`,
      },
    },
  },
});

export const panel = style({
  padding: `${vars.space[200]} ${vars.space[300]}`,
});

export const button = style({
  position: "relative",

  color: vars.colors["text-alternative"],
  backgroundColor: "transparent",
  border: "none",

  transitionProperty: "color, background-color, border-color, box-shadow",
  transitionDuration: "0.12s",
  transitionTimingFunction: "ease",

  cursor: "pointer",

  selectors: {
    "&:hover": { textDecoration: "none" },
    "&:focus": { textDecoration: "none" },
    "&:disabled": {
      opacity: "0.32",
      color: vars.colors["text-alternative"],
      pointerEvents: "none",
    },
  },
});

export const buttonInner = style({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",

  selectors: {
    [`${button}[data-state="active"] &`]: {
      color: vars.colors["text-primary"],
      fontWeight: vars.fontWeights[500],
    },
  },
});

export const buttonHiddenInner = style([
  {
    visibility: "hidden",
    fontWeight: vars.fontWeights[500],
  },
]);

export const buttonSizes = styleVariants({
  sm: {
    height: vars.sizes[300],
    fontSize: vars.fontSizes["050"],
    fontWeight: vars.fontWeights[400],
    lineHeight: vars.lineHeights["050"],
    letterSpacing: vars.letterSpacings["b3"],
  },
  md: {
    height: vars.sizes[400],
    fontSize: vars.fontSizes["075"],
    fontWeight: vars.fontWeights[400],
    lineHeight: vars.lineHeights["075"],
    letterSpacing: vars.letterSpacings["b2"],
  },
  lg: {
    height: vars.sizes[500],
    fontSize: vars.fontSizes["075"],
    fontWeight: vars.fontWeights[400],
    lineHeight: vars.lineHeights["075"],
    letterSpacing: vars.letterSpacings["b2"],
  },
  xl: {
    height: vars.sizes[600],
    fontSize: vars.fontSizes[100],
    fontWeight: vars.fontWeights[400],
    lineHeight: vars.lineHeights[100],
    letterSpacing: vars.letterSpacings["b1"],
  },
});

export const buttonStretch = style({
  flex: 1,
});
