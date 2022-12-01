import { Meta, Story } from '@storybook/react'

import { Textarea, TextareaProps } from '@/components'

export default {
  title: 'Forms/Textarea',
  component: Textarea,
} as Meta

export const Default: Story<TextareaProps> = (args) => {
  return <Textarea {...args} />
}

Default.args = {}
