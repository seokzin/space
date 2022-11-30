import { Meta, Story } from '@storybook/react'

import { Tooltip, TooltipProps } from '@/components'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
} as Meta

export const Default: Story<TooltipProps> = (args) => {
  return <Tooltip {...args} />
}

Default.args = {}
