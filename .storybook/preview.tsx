import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator } from '@storybook/react'
import React from 'react'

import GlobalStyle from '../src/styles/GlobalStyle'

addDecorator((Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
