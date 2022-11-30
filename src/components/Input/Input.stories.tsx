import { Meta, Story } from '@storybook/react'

import { Input, InputProps } from '@/components'

export default {
  title: 'Forms/Input',
  component: Input,
} as Meta

export const Default: Story<InputProps> = (args) => {
  return <Input {...args} />
}

Default.args = {}
