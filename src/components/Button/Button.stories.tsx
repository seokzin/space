import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from '@/components'

export default {
  title: 'Forms/Button',
  component: Button,
} as Meta

export const Default: Story<ButtonProps> = (args) => {
  return <Button {...args} />
}

Default.args = {
  children: 'Button',
}
