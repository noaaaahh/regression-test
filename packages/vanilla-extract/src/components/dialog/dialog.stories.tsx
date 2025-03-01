import type { StoryObj } from "@storybook/react";
import { Dialog } from "./dialog";

import { Button } from "../button";

export default {
  title: "Vanilla/Dialog",
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["md", "lg", "xl"],
    },
  },
};

type Story = StoryObj<typeof Dialog>;

export const TEST_BED: Story = {
  render: (args) => (
    <Dialog {...args} open>
      <Dialog.Trigger asChild>
        <Button>hihi</Button>
      </Dialog.Trigger>
      <Dialog.CombinedContent>
        <Dialog.Header>
          <Dialog.Title>다이얼로그입니다.</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <Dialog.Description>기본 형태의 다이얼로그입니다.</Dialog.Description>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button color="hint">닫기</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.CombinedContent>
    </Dialog>
  ),
};

export const Default: Story = {
  render: (args) => (
    <Dialog {...args}>
      <Dialog.Trigger asChild>
        <Button>hihi</Button>
      </Dialog.Trigger>
      <Dialog.CombinedContent>
        <Dialog.Header>
          <Dialog.Title>다이얼로그입니다.</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <Dialog.Description>기본 형태의 다이얼로그입니다.</Dialog.Description>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button color="hint">닫기</Button>
          </Dialog.Close>
        </Dialog.Footer>
      </Dialog.CombinedContent>
    </Dialog>
  ),
};

export const Default2: Story = {
  render: (args) => (
    <Dialog {...args}>
      <Dialog.Trigger asChild>
        <Button>hihi</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>다이얼로그입니다.</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <Dialog.Description>
              기본 형태의 다이얼로그입니다.
            </Dialog.Description>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button color="hint">닫기</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  ),
};
