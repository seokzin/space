import { Meta, Story } from '@storybook/react'

import { List, ListProps } from '@/components'

export default {
  title: 'Data Display/List',
  component: List,
} as Meta

export const Default: Story<ListProps> = (args) => {
  return <List {...args} />
}

Default.args = {}
