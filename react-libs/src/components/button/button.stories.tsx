const React = require('react')

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import Button from "./button";
import {IButton} from "./ibutton";

export default {
  title: 'CBE/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IButton> = (args) => (
    <Button {...args}>
      {args.children}
    </Button>
);

export const Default = Template.bind({});
Default.args = {
  type: 'button',
  actionType: 'default',
  loading: false,
  disabled: false,
  backgroundColor: '--button--default-background',
  size: 'normal',
  label: 'Default',
  iconPosition: 'left',
  block: false
};

export const Primary = Template.bind({});
Primary.args = {
  actionType: 'primary',
  label: 'Primary',
};

export const Info = Template.bind({});
Info.args = {
  actionType: 'info',
  label: 'Info',
};

export const Warning = Template.bind({});
Warning.args = {
  actionType: 'warning',
  label: 'Warning',
};

export const Danger = Template.bind({});
Danger.args = {
  actionType: 'danger',
  label: 'Danger',
};

// export const Custom = Template.bind({});
// Custom.args = {
//   actionType: 'custom',
//   label: 'Custom Button',
// };

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small',
};

export const Mini = Template.bind({});
Mini.args = {
  size: 'mini',
  label: 'Mini',
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  label: 'Loading',
};

export const OnClick = Template.bind({});
OnClick.args = {
  label: 'Click Me',
  onClick: () => {alert('Button Clicked')}
};
