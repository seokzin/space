import { Meta, Story } from '@storybook/react'

import Avatar, { AvatarProps } from './Avatar'

export default {
  title: 'Media and Icons/Avatar',
  component: Avatar,
} as Meta

export const Default: Story<AvatarProps> = (args) => {
  return <Avatar {...args} />
}
