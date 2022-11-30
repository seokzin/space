import { Meta, Story } from '@storybook/react'

import { Slider, SliderProps } from '@/components'

export default {
  title: 'Forms/Slider',
  component: Slider,
} as Meta

export const Default: Story<SliderProps> = (args) => {
  return <Slider {...args} />
}

Default.args = {}
