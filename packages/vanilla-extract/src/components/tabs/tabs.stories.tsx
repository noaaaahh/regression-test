import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from ".";

export default {
  title: "Vanilla/Tabs",
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "mg", "lg", "xl"] },
    direction: { control: "inline-radio", options: ["horizontal", "vertical"] },
    position: { control: "inline-radio", options: ["start", "center"] },
    align: { control: "inline-radio", options: ["left", "center", "right"] },
  },
} as Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const TEST_BED: Story = {
  render: (args) => {
    return (
      <Tabs.Root {...args} defaultValue="청크입니다.">
        <Tabs.List>
          <Tabs.Button value="안녕하세요">안녕하세요</Tabs.Button>
          <Tabs.Button value="청크입니다.">청크입니다.</Tabs.Button>
          <Tabs.Button value="저 아시죠?">저 아시죠?</Tabs.Button>
        </Tabs.List>
        <Tabs.Panel value="안녕하세요">1</Tabs.Panel>
        <Tabs.Panel value="청크입니다.">2</Tabs.Panel>
        <Tabs.Panel value="저 아시죠?">3</Tabs.Panel>
      </Tabs.Root>
    );
  },
};

export const Default: Story = {
  render: (args) => {
    return (
      <Tabs.Root {...args}>
        <Tabs.List>
          <Tabs.Button value="안녕하세요">안녕하세요</Tabs.Button>
          <Tabs.Button value="청크입니다.">청크입니다.</Tabs.Button>
          <Tabs.Button value="저 아시죠?">저 아시죠?</Tabs.Button>
        </Tabs.List>
        <Tabs.Panel value="안녕하세요">1</Tabs.Panel>
        <Tabs.Panel value="청크입니다.">2</Tabs.Panel>
        <Tabs.Panel value="저 아시죠?">3</Tabs.Panel>
      </Tabs.Root>
    );
  },
};
