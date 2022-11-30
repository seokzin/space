import { Meta, Story } from '@storybook/react'

import { Spinner, SpinnerProps } from '@/components'

export default {
  title: 'Feedback/Spinner',
  component: Spinner,
} as Meta

export const Default: Story<SpinnerProps> = (args) => {
  return <Spinner {...args} />
}

Default.args = {}
