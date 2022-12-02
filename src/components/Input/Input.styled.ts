import styled from 'styled-components'

export const Layout = styled.input`
  box-sizing: border-box;
  display: block;
  outline: none;
  border-width: ${({ disabled }) => (disabled ? 0 : '1px')};
  border-radius: 4px;
  border-color: ${({ theme }) => theme.color.gray2};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.color.gray1 : theme.color.white};
  padding: 0 10px;
  width: 290px;
  height: 40px;
  color: ${({ disabled, theme }) =>
    disabled ? theme.color.gray3 : theme.color.gray4};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray3};
  }

  &:active,
  &:focus {
    border-color: ${({ disabled, theme }) =>
      disabled ? theme.color.gray4 : theme.color.indigo};
    background-color: ${({ disabled, theme }) =>
      disabled ? theme.color.gray5 : theme.color.white};
  }
`
