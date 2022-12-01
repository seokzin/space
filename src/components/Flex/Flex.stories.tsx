import { Meta, Story } from '@storybook/react'

import { Flex, FlexProps } from '@/components'

export default {
  title: 'Layout/Flex',
  component: Flex,
} as Meta

export const Default: Story<FlexProps> = (args) => {
  return <Flex {...args} />
}

Default.args = {}
