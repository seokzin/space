import { Meta, Story } from '@storybook/react'

import { Toast, ToastProps } from '@/components'

export default {
  title: 'Feedback/Toast',
  component: Toast,
} as Meta

export const Default: Story<ToastProps> = (args) => {
  return <Toast {...args} />
}

Default.args = {}
