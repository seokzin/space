import { Meta, Story } from '@storybook/react'

import { Badge, BadgeProps } from '@/components'

export default {
  title: 'Data Display/Badge',
  component: Badge,
} as Meta

export const Default: Story<BadgeProps> = (args) => {
  return <Badge {...args} />
}

Default.args = {}
