import { Meta, Story } from '@storybook/react'

import { Tabs, TabsProps } from '@/components'

export default {
  title: 'Disclosure/Tabs',
  component: Tabs,
} as Meta

export const Default: Story<TabsProps> = (args) => {
  return <Tabs {...args} />
}

Default.args = {}
