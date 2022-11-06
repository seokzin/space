import styled from 'styled-components'

export const Layout = styled.div<{ size: number; color: string }>`
  border-radius: 50%;
  background-color: ${({ color }) => color};

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`

export const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;

  object-fit: cover;
`
