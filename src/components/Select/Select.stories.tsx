import { Meta, Story } from '@storybook/react'

import { Select, SelectProps } from '@/components'

export default {
  title: 'Forms/Select',
  component: Select,
} as Meta

export const Default: Story<SelectProps> = (args) => {
  return <Select {...args} />
}

Default.args = {}
