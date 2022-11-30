import { create } from '@storybook/theming'

const theme = {
  colorPrimary: '#4859ED',
  colorSecondary: '#8F45ED',

  fontBase: 'pretendard, sans-serif',

  // Brand
  brandTitle: 'Space',
}

export const light = create({
  ...theme,
  base: 'light',
  brandImage: '/images/logo.light.svg',
})

export const dark = create({
  ...theme,
  base: 'dark',
  brandImage: '/images/logo.dark.svg',
  appBg: '#0D1117',
  barBg: '#161B22',
  appContentBg: '#161B22',
})
