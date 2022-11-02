import { addDecorator } from '@storybook/react'
import React from 'react'

import GlobalStyle from '../src/styles/GlobalStyle'

addDecorator((Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
))
