import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "Vanilla/Button",
  argTypes: {
    color: {
      control: "inline-radio",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "hint",
        "contrast",
      ],
    },
    size: { control: "inline-radio", options: ["sm", "md", "lg", "xl"] },
    shape: {
      control: "inline-radio",
      options: ["fill", "outline", "invisible"],
    },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const TEST_BED: Story = {
  render: () => (
    <div style={{ display: "flex" }}>
      <Button color="primary">primary</Button>
      <Button color="secondary">secondary</Button>
      <Button color="success">success</Button>
      <Button color="danger">danger</Button>
      <Button color="warning">warning</Button>
      <Button color="hint">hint</Button>
      <Button color="contrast">contrast</Button>
    </div>
  ),
};

export const Default: Story = {
  render: (args) => <Button {...args}>버튼</Button>,
};
