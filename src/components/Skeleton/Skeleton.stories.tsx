import { Meta, Story } from '@storybook/react'

import { Skeleton, SkeletonProps } from '@/components'

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
} as Meta

export const Default: Story<SkeletonProps> = (args) => {
  return <Skeleton {...args} />
}

Default.args = {}
