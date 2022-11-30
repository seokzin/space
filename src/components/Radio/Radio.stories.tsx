import { Meta, Story } from '@storybook/react'

import { Radio, RadioProps } from '@/components'

export default {
  title: 'Forms/Radio',
  component: Radio,
} as Meta

export const Default: Story<RadioProps> = (args) => {
  return <Radio {...args} />
}

Default.args = {}
