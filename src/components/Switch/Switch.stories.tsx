import { Meta, Story } from '@storybook/react'

import { Switch, SwitchProps } from '@/components'

export default {
  title: 'Forms/Switch',
  component: Switch,
} as Meta

export const Default: Story<SwitchProps> = (args) => {
  return <Switch {...args} />
}

Default.args = {}
