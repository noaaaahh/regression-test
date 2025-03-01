import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

export const overlay = style({
  position: "fixed",
  backgroundColor: vars.colors["black-transparent-32"],
  inset: 0,
  zIndex: 1050,

  selectors: {
    "&[data-state='open']": { opacity: 0.8 },
    "&[data-state='closed']": { opacity: 0 },
  },
});

export const content = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1050,

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  backgroundColor: vars.colors["background-alternative-02"],
  borderRadius: vars.radii[300],

  opacity: 0,
  boxShadow: "0 1rem 2rem 0 rgba(0, 0, 0, 0.2)",

  selectors: {
    "&[data-state='open']": { opacity: 1 },
    "&[data-state='closed']": { opacity: 0 },
  },
});

export const sizes = styleVariants({
  md: { width: "31.25rem" },
  lg: { width: "50rem" },
  xl: { width: "71.25rem" },
});

export const title = style({
  color: vars.colors["text-normal"],
  fontSize: vars.fontSizes["200"],
  fontWeight: vars.fontWeights["700"],
  lineHeight: vars.lineHeights["200"],
  letterSpacing: vars.letterSpacings["h5"],
});

export const description = style({
  color: vars.colors["text-normal"],
  fontSize: vars.fontSizes["075"],
  fontWeight: vars.fontWeights["400"],
  lineHeight: vars.lineHeights["075"],
  letterSpacing: vars.letterSpacings["b2"],
});

export const header = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: vars.sizes["700"],
  paddingBlock: 0,
  paddingInline: vars.space["300"],
});

export const body = style({
  width: "100%",
  paddingBlock: 0,
  paddingInline: vars.space["300"],
  overflowY: "auto",
});

export const footer = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
  paddingBlock: vars.space["200"],
  paddingInline: vars.space["300"],
});
