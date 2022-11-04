import { Meta, Story } from '@storybook/react'

import { Avatar, AvatarProps } from '@/components'

export default {
  title: 'Media and Icons/Avatar',
  component: Avatar,
} as Meta

export const Default: Story<AvatarProps> = (args) => {
  return <Avatar {...args} />
}

Default.args = {
  name: 'seokzin so',
  src: 'https://icons.veryicon.com/png/o/animal/animal-simple-icon/cat-40.png',
  size: 'md',
}
