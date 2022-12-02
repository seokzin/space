import styled from 'styled-components'

export const Layout = styled.button`
  box-sizing: border-box;
  display: block;
  outline: none;
  border: 0;
  border-radius: 4px;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.color.gray3 : theme.color.indigo};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 0 20px;
  height: 40px;
  color: ${({ theme }) => theme.color.trueWhite};

  &:active,
  &:focus,
  &:hover {
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.color.gray3 : theme.color.magenta};
  }
`
