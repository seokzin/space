import { Meta, Story } from '@storybook/react'

import { Icon, IconProps } from '@/components'

export default {
  title: 'Media and Icons/Icon',
  component: Icon,
} as Meta

export const Default: Story<IconProps> = (args) => {
  return <Icon {...args} />
}

Default.args = {}
