import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

export const base = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "0.0625rem solid transparent",
  borderRadius: vars.radii["300"],
  cursor: "pointer",

  ":disabled": {
    pointerEvents: "none",
    opacity: 0.32,
  },
});

export const sizes = styleVariants({
  sm: {
    gap: vars.space["050"],
    height: vars.sizes["300"],
    paddingInline: vars.space["050"],
  },
  md: {
    gap: vars.space["075"],
    height: vars.sizes["400"],
    paddingInline: vars.space["150"],
  },
  lg: {
    gap: vars.space["100"],
    height: vars.sizes["500"],
    paddingInline: vars.space["200"],
  },
  xl: {
    gap: vars.space["100"],
    height: vars.sizes["600"],
    paddingInline: vars.space["300"],
  },
});

const fg = createVar();
const fgAlternative = createVar();
const main = createVar();
const transparent8 = createVar();
const transparent16 = createVar();
const transparent24 = createVar();
const transparent32 = createVar();
const hover = createVar();
const active = createVar();
const accent = createVar();

export const colors = styleVariants({
  primary: {
    vars: {
      [fg]: vars.colors["text-primary"],
      [fgAlternative]: vars.colors["text-primary-alternative"],
      [main]: vars.colors["primary"],
      [transparent8]: vars.colors["primary-transparent-8"],
      [transparent16]: vars.colors["primary-transparent-16"],
      [transparent24]: vars.colors["primary-transparent-24"],
      [transparent32]: vars.colors["primary-transparent-32"],
      [hover]: vars.colors["primary-hover"],
      [active]: vars.colors["primary-active"],
      [accent]: vars.colors["white"],
    },
  },
  secondary: {
    vars: {
      [fg]: vars.colors["text-secondary"],
      [fgAlternative]: vars.colors["text-secondary-alternative"],
      [main]: vars.colors["secondary"],
      [transparent8]: vars.colors["secondary-transparent-8"],
      [transparent16]: vars.colors["secondary-transparent-16"],
      [transparent24]: vars.colors["secondary-transparent-24"],
      [transparent32]: vars.colors["secondary-transparent-32"],
      [hover]: vars.colors["secondary-hover"],
      [active]: vars.colors["secondary-active"],
      [accent]: vars.colors["text-secondary-alternative"],
    },
  },
  success: {
    vars: {
      [fg]: vars.colors["text-success"],
      [fgAlternative]: vars.colors["text-success-alternative"],
      [main]: vars.colors["success"],
      [transparent8]: vars.colors["success-transparent-8"],
      [transparent16]: vars.colors["success-transparent-16"],
      [transparent24]: vars.colors["success-transparent-24"],
      [transparent32]: vars.colors["success-transparent-32"],
      [hover]: vars.colors["success-hover"],
      [active]: vars.colors["success-active"],
      [accent]: vars.colors["white"],
    },
  },
  warning: {
    vars: {
      [fg]: vars.colors["text-warning"],
      [fgAlternative]: vars.colors["text-warning-alternative"],
      [main]: vars.colors["warning"],
      [transparent8]: vars.colors["warning-transparent-8"],
      [transparent16]: vars.colors["warning-transparent-16"],
      [transparent24]: vars.colors["warning-transparent-24"],
      [transparent32]: vars.colors["warning-transparent-32"],
      [hover]: vars.colors["warning-hover"],
      [active]: vars.colors["warning-active"],
      [accent]: vars.colors["white"],
    },
  },
  danger: {
    vars: {
      [fg]: vars.colors["text-danger"],
      [fgAlternative]: vars.colors["text-danger-alternative"],
      [main]: vars.colors["danger"],
      [transparent8]: vars.colors["danger-transparent-8"],
      [transparent16]: vars.colors["danger-transparent-16"],
      [transparent24]: vars.colors["danger-transparent-24"],
      [transparent32]: vars.colors["danger-transparent-32"],
      [hover]: vars.colors["danger-hover"],
      [active]: vars.colors["danger-active"],
      [accent]: vars.colors["white"],
    },
  },
  hint: {
    vars: {
      [fg]: vars.colors["text-hint"],
      [fgAlternative]: vars.colors["text-hint-alternative"],
      [main]: vars.colors["hint"],
      [transparent8]: vars.colors["hint-transparent-8"],
      [transparent16]: vars.colors["hint-transparent-16"],
      [transparent24]: vars.colors["hint-transparent-24"],
      [transparent32]: vars.colors["hint-transparent-32"],
      [hover]: vars.colors["hint-hover"],
      [active]: vars.colors["hint-active"],
      [accent]: vars.colors["white"],
    },
  },
  contrast: {
    vars: {
      [fg]: vars.colors["text-contrast"],
      [fgAlternative]: vars.colors["text-contrast-alternative"],
      [main]: vars.colors["contrast"],
      [transparent8]: vars.colors["contrast-transparent-8"],
      [transparent16]: vars.colors["contrast-transparent-16"],
      [transparent24]: vars.colors["contrast-transparent-24"],
      [transparent32]: vars.colors["contrast-transparent-32"],
      [hover]: vars.colors["contrast-hover"],
      [active]: vars.colors["contrast-active"],
      [accent]: vars.colors["white"],
    },
  },
});

export const shapes = styleVariants({
  fill: {
    color: accent,
    backgroundColor: main,

    ":hover": { backgroundColor: hover },
    ":focus-visible": { backgroundColor: hover },
    ":active": { backgroundColor: active },
  },
  outline: {
    color: fgAlternative,
    backgroundColor: transparent8,
    borderColor: main,

    ":hover": { backgroundColor: transparent16 },
    ":focus-visible": { backgroundColor: transparent16 },
    ":active": { backgroundColor: transparent24 },
  },
  invisible: {
    color: fg,
    backgroundColor: "transparent",

    ":hover": { backgroundColor: vars.colors["gray-600-transparent-8"] },
    ":focus-visible": {
      backgroundColor: vars.colors["gray-600-transparent-8"],
    },
    ":active": {
      color: fgAlternative,
      backgroundColor: vars.colors["gray-600-transparent-16"],
    },
  },
});

export const stretch = style({
  width: "100%",
});
