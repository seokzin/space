import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator } from '@storybook/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '../src/styles'
import { dark, light } from './theme'

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
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
  darkMode: {
    dark,
    light,
  },
}
