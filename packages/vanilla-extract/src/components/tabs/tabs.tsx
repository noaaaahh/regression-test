import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";
import * as Radix from "@radix-ui/react-tabs";
import { createContext } from "~/libs/create-context";

import * as styles from "./tabs.css";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";

type TabsContextType = {
  size: "sm" | "md" | "lg" | "xl";
  stretch: boolean;
  position: "start" | "center";
  orientation: "horizontal" | "vertical";
};

const [TabsRoot, useTabs] = createContext<TabsContextType>({
  name: "Tabs",
  hookName: "useTabsContext",
  providerName: "TabsProvider",
});

/******************************************************************************/

export interface TabsProps extends Radix.TabsProps, Partial<TabsContextType> {}

const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    size = "md",
    position = "start",
    stretch = false,
    orientation = "horizontal",
    children,
    ...rest
  } = props;

  return (
    <TabsRoot value={{ size, stretch, position, orientation }}>
      <Radix.Tabs
        ref={ref}
        activationMode="manual"
        className={clsx(styles.root, styles.rootOrientation[orientation])}
        {...rest}
      >
        {children}
      </Radix.Tabs>
    </TabsRoot>
  );
});
Tabs.displayName = "Tabs";

/******************************************************************************/

export interface TabsListProps
  extends ComponentPropsWithoutRef<typeof Radix.List> {}

const TabsList = forwardRef<HTMLDivElement, TabsListProps>((props, ref) => {
  const { loop, children, ...rest } = props;
  const { position, orientation } = useTabs();

  return (
    <Radix.List
      ref={ref}
      loop={loop}
      className={clsx(
        styles.list,
        styles.listOrientation[orientation],
        styles.positions[position]
      )}
      {...rest}
    >
      {children}
    </Radix.List>
  );
});
TabsList.displayName = "Tabs.List";

/******************************************************************************/

export interface TabsButtonProps
  extends ComponentPropsWithoutRef<typeof Radix.Trigger> {
  align?: "left" | "center" | "right";
}

const TabsButton = forwardRef<HTMLButtonElement, TabsButtonProps>(
  ({ asChild, align, className, children, ...props }, ref) => {
    const { size, stretch } = useTabs();
    const Component = asChild ? Slot : Radix.Trigger;

    return (
      <Component
        ref={ref}
        className={clsx(
          styles.button,
          styles.buttonSizes[size],
          stretch && styles.buttonStretch
        )}
        {...props}
      >
        <span className={styles.buttonInner}>{children}</span>
        <span className={styles.buttonHiddenInner}>{children}</span>
      </Component>
    );
  }
);
TabsButton.displayName = "Tabs.Button";

/******************************************************************************/

export interface TabsPanelProps
  extends ComponentPropsWithoutRef<typeof Radix.Content> {}

const TabsPanel = forwardRef<HTMLDivElement, TabsPanelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Radix.Content
        ref={ref}
        className={clsx(styles.panel, className)}
        {...props}
      >
        {children}
      </Radix.Content>
    );
  }
);
TabsPanel.displayName = "Tabs.Panel";

export const Root = Tabs;
export const List = TabsList;
export const Button = TabsButton;
export const Panel = TabsPanel;
