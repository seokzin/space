import { Meta, Story } from '@storybook/react'

import { Checkbox, CheckboxProps } from '@/components'

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} as Meta

export const Default: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args} />
}

Default.args = {}
