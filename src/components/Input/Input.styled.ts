import styled from 'styled-components'

export const Layout = styled.input`
  box-sizing: border-box;
  display: block;
  width: 290px;
  height: 40px;
  padding: 0 10px;
  color: ${({ disabled, theme }) =>
    disabled ? theme.color.gray3 : theme.color.gray4};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.color.gray1 : theme.color.white};
  border-color: ${({ theme }) => theme.color.gray2};
  border-width: ${({ disabled }) => (disabled ? 0 : '1px')};
  border-radius: 4px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.color.gray3};
  }

  &:active,
  &:focus {
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.color.gray5 : theme.color.white};
    border-color: ${({ disabled, theme }) =>
      disabled ? theme.color.gray4 : theme.color.indigo};
  }
`
