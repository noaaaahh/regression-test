import * as Radix from "@radix-ui/react-dialog";
import type { ComponentPropsWithoutRef } from "react";
import { vapor } from "~/libs/factory";
import { createContext } from "~/libs/create-context";

import * as styles from "./dialog.css";
import clsx from "clsx";

type DialogContextType = { size: "md" | "lg" | "xl" };

const [DialogRoot, useDialog] = createContext<DialogContextType>({
  name: "Dialog",
  hookName: "useDialogContext",
  providerName: "DialogProvider",
});

/******************************************************************************/

interface DialogProps extends Radix.DialogProps, Partial<DialogContextType> {}

export const Dialog = ({ size = "md", children, ...props }: DialogProps) => {
  return (
    <Radix.Dialog {...props}>
      <DialogRoot value={{ size }}>{children}</DialogRoot>
    </Radix.Dialog>
  );
};

/******************************************************************************/

interface OverlayProps extends ComponentPropsWithoutRef<typeof Radix.Overlay> {}

const Overlay = ({ className, ...props }: OverlayProps) => {
  return (
    <Radix.Overlay className={clsx(styles.overlay, className)} {...props} />
  );
};

/******************************************************************************/

interface CombinedContentProps
  extends ComponentPropsWithoutRef<typeof Radix.Content> {}

const CombinedContent = (props: CombinedContentProps) => {
  return (
    <Radix.DialogPortal>
      <Overlay />
      <Content {...props} />
    </Radix.DialogPortal>
  );
};

/******************************************************************************/

interface ContentProps extends ComponentPropsWithoutRef<typeof Radix.Content> {}

const Content = ({ className, ...props }: ContentProps) => {
  const { size } = useDialog();

  return (
    <Radix.Content
      className={clsx(styles.content, styles.sizes[size], className)}
      {...props}
    />
  );
};

/******************************************************************************/

interface TriggerProps extends Radix.DialogTriggerProps {}

const Trigger = (props: TriggerProps) => {
  return <Radix.DialogTrigger {...props} />;
};

/******************************************************************************/

interface TitleProps extends ComponentPropsWithoutRef<typeof Radix.Title> {}

const Title = ({ className, ...props }: TitleProps) => {
  return <Radix.Title className={clsx(styles.title, className)} {...props} />;
};

/******************************************************************************/

interface CloseProps extends Radix.DialogCloseProps {}

const Close = (props: CloseProps) => {
  return <Radix.DialogClose {...props} />;
};

/******************************************************************************/

interface DescriptionProps
  extends ComponentPropsWithoutRef<typeof Radix.Description> {}

const Description = ({ className, ...props }: DescriptionProps) => {
  return (
    <Radix.Description
      className={clsx(styles.description, className)}
      {...props}
    />
  );
};

/******************************************************************************/

interface HeaderProps extends ComponentPropsWithoutRef<typeof vapor.div> {}

const Header = ({ className, ...props }: HeaderProps) => {
  return <vapor.div className={clsx(styles.header, className)} {...props} />;
};

/******************************************************************************/

interface BodyProps extends ComponentPropsWithoutRef<typeof vapor.div> {}

const Body = ({ className, ...props }: BodyProps) => {
  return <vapor.div className={clsx(styles.body, className)} {...props} />;
};

/******************************************************************************/

interface FooterProps extends ComponentPropsWithoutRef<typeof vapor.div> {}

const Footer = ({ className, ...props }: FooterProps) => {
  return <vapor.div className={clsx(styles.footer, className)} {...props} />;
};

/******************************************************************************/

Dialog.Portal = Radix.DialogPortal;
Dialog.Trigger = Trigger;
Dialog.Overlay = Overlay;
Dialog.CombinedContent = CombinedContent;
Dialog.Content = Content;
Dialog.Header = Header;
Dialog.Body = Body;
Dialog.Footer = Footer;
Dialog.Title = Title;
Dialog.Description = Description;
Dialog.Close = Close;
