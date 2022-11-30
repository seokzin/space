import { Meta, Story } from '@storybook/react'

import { Breadcrumb, BreadcrumbProps } from '@/components'

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
} as Meta

export const Default: Story<BreadcrumbProps> = (args) => {
  return <Breadcrumb {...args} />
}

Default.args = {}
