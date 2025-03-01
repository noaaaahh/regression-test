import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { vapor } from "~/libs/factory";
import * as styles from "./button.css";

type Size = keyof typeof styles.sizes;
type Color = keyof typeof styles.colors;
type Shape = keyof typeof styles.shapes;

interface ButtonProps extends ComponentPropsWithoutRef<typeof vapor.button> {
  size?: Size;
  color?: Color;
  shape?: Shape;
  stretch?: boolean;
}

export const Button = ({
  color = "primary",
  shape = "fill",
  size = "md",
  stretch,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <vapor.button
      className={clsx(
        styles.base,
        styles.colors[color],
        styles.shapes[shape],
        styles.sizes[size],
        stretch && styles.stretch,
        className
      )}
      {...props}
    >
      {children}
    </vapor.button>
  );
};
