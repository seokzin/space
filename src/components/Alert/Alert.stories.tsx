import { Meta, Story } from '@storybook/react'

import { Alert, AlertProps } from '@/components'

export default {
  title: 'Feedback/Alert',
  component: Alert,
} as Meta

export const Default: Story<AlertProps> = (args) => {
  return <Alert {...args} />
}

Default.args = {}
