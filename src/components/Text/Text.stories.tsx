import { Meta, Story } from '@storybook/react'

import { Text, TextProps } from '@/components'

export default {
  title: 'Typography/Text',
  component: Text,
} as Meta

export const Default: Story<TextProps> = (args) => {
  return <Text {...args} />
}

Default.args = {
  children: 'Text',
}
