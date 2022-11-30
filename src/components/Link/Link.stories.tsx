import { Meta, Story } from '@storybook/react'

import { Link, LinkProps } from '@/components'

export default {
  title: 'Navigation/Link',
  component: Link,
} as Meta

export const Default: Story<LinkProps> = (args) => {
  return <Link {...args} />
}

Default.args = {}
