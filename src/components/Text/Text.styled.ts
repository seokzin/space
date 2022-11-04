import styled from 'styled-components'

import { TextProps } from '@/components'

export const Layout = styled.p<TextProps>`
  text-align: ${({ align }) => align || 'left'};
  color: ${({ color }) => color || 'inherit'};
  font-size: ${({ size, theme }) => theme.size[size || 'md']};
  font-weight: ${({ weight, theme }) => theme.weight[weight || 'regular']};
`
