import { Meta, Story } from '@storybook/react'

import { Image, ImageProps } from '@/components'

export default {
  title: 'Media and Icons/Image',
  component: Image,
} as Meta

export const Default: Story<ImageProps> = (args) => {
  return <Image {...args} />
}

Default.args = {}
