import { create } from '@storybook/theming'

const theme = {
  colorPrimary: '#4859ED',
  colorSecondary: '#8F45ED',

  // Brand
  brandTitle: 'Space',
}

export const light = create({
  base: 'light',
  brandImage: '/images/logo.light.svg',
  ...theme,
})

export const dark = create({
  base: 'dark',
  brandImage: '/images/logo.dark.svg',
  ...theme,
})
