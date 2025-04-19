import clsx from "clsx";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = "primary",
      shape = "fill",
      size = "md",
      stretch,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <vapor.button
        ref={ref}
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
  }
);

// CSS 분리 가능한지
