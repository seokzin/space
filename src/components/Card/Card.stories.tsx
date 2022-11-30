import { Meta, Story } from '@storybook/react'

import { Card, CardProps } from '@/components'

export default {
  title: 'Data Display/Card',
  component: Card,
} as Meta

export const Default: Story<CardProps> = (args) => {
  return <Card {...args} />
}

Default.args = {}
