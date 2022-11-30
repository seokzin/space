import { Meta, Story } from '@storybook/react'

import { Accordion, AccordionProps } from '@/components'

export default {
  title: 'Disclosure/Accordion',
  component: Accordion,
} as Meta

export const Default: Story<AccordionProps> = (args) => {
  return <Accordion {...args} />
}

Default.args = {}
