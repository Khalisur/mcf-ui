import type { Meta, StoryObj } from "@storybook/react";
import { TestButton } from "./Test";

const meta: Meta<typeof TestButton> = {
  title: "Examples/Test",
  component: TestButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
