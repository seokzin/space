import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

export const Default: Story<ButtonProps> = (args) => {
  return <Button {...args} />
}

Default.args = {}
