import { Button as ServerButton } from '@heathmont/moon-base-tw';
import { Other3Dots, OtherFrame } from '@heathmont/moon-icons-tw';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ServerButton> = {
  title: 'Example/ServerButton',
  component: ServerButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
      default: 'xs',
    },
    animation: {
      options: ['progress', 'success', 'error', 'pulse'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Button',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/S3q1SkVngbwHuwpxHKCsgtJj/Moon---Master-Components-Tailwind?node-id=23027%3A1664&mode=dev',
    },
  },
};

export const Sizes: Story = {
  args: {
    children: (
      <>
        <OtherFrame />
        Button
      </>
    ),
    size: 'xs',
  },
};

export const Animation: Story = {
  render: () => (
    <div className="flex gap-2">
      <ServerButton animation="progress">Progress</ServerButton>
      <ServerButton animation="success">Success</ServerButton>
      <ServerButton animation="error">Error</ServerButton>
      <ServerButton animation="pulse">Pulse</ServerButton>
    </div>
  ),
};
