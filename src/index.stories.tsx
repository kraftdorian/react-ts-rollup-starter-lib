import React, {PropsWithChildren} from 'react';
import { Meta, Story } from '@storybook/react';
import Component from "./index";

const meta: Meta<PropsWithChildren<{}>> = {
  title: 'My Component',
  component: Component,
  argTypes: {
    children: {
      description: 'Content or elements to be rendered inside the Component',
      control: {
        type: 'text',
      },
    },
  },
};

const Template: Story<PropsWithChildren<{}>> = (args) => <Component {...args} />;

const Basic = Template.bind({});
Basic.args = {
  children: 'Component',
};

export default meta;
export { Basic };
