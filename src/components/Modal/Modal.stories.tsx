import { Meta, Story } from '@storybook/react'

import { Modal, ModalProps } from '@/components'

export default {
  title: 'Overlay/Modal',
  component: Modal,
} as Meta

export const Default: Story<ModalProps> = (args) => {
  return <Modal {...args} />
}

Default.args = {}
