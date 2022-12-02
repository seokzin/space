import { Meta, Story } from '@storybook/react'

import { Input, InputProps } from '@/components'

export default {
  title: 'Forms/Input',
} as Meta

export const Default: Story<InputProps> = (args) => {
  return <Input {...args} />
}

export const Disabled = () => <Input disabled placeholder="disabled" />

Default.args = {
  placeholder: 'placeholder',
  disabled: false,
}
