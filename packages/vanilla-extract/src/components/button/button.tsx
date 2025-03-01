import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";
import { vapor } from "~/libs/factory";
import { sizes, colors, shapes, base } from "./button.css";

type Size = keyof typeof sizes;
type Color = keyof typeof colors;
type Shape = keyof typeof shapes;

interface ButtonProps extends ComponentPropsWithoutRef<typeof vapor.button> {
  size?: Size;
  color?: Color;
  shape?: Shape;
}

export const Button = ({
  color = "primary",
  shape = "fill",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <vapor.button
      className={clsx(
        base,
        colors[color],
        shapes[shape],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </vapor.button>
  );
};
