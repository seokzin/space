import styled from 'styled-components'

export const Layout = styled.button<{ size: string }>`
  border-radius: 4px;
  background-color: #fff;

  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
          width: 32px;
          height: 32px;

          font-size: 12px;
          `
      case 'md':
        return `
          width: 48px;
          height: 48px;

          font-size: 16px;
          `
      case 'lg':
        return `
          width: 64px;
          height: 64px;

          font-size: 24px;
          `
    }
  }}
`
