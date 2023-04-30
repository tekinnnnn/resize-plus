import Resizer from '../components/Resizer';
import type { Meta } from '@storybook/react';

const meta = {
  title: 'Example/Resizer',
  component: Resizer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Resizer>;

export default meta;


export const Rotate = {
  args: {
    style: {
      width: 200,
      height: 200,
      left: 500,
      top: 200,
      angle: 0,
    }
  },
};