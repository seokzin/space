import styled from 'styled-components'

import { TextProps } from '@/components'

export const Layout = styled.p<TextProps>`
  font-size: ${({ size, theme }) => theme.size[size || 'md']};
  font-weight: ${({ weight, theme }) => theme.weight[weight || 'regular']};
  color: ${({ color }) => color || 'inherit'};
  text-align: ${({ align }) => align || 'left'};
`
