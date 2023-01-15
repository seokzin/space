import styled from 'styled-components'

export const Layout = styled.div<{ size: number; color: string }>`

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;

  object-fit: cover;
`
