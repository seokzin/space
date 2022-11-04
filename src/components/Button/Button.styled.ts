import styled from 'styled-components'

export const Layout = styled.button`
  box-sizing: border-box;
  outline: none;
  border: none;
  border-radius: 0.25rem;
  background: #20c997;
  padding: 0.5rem 1rem;
  height: 2rem;
  line-height: 1;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;

  &:focus {
    box-shadow: 0 0 8px rgb(0 0 0 / 0.2);
  }

  &:hover {
    background: #38d9a9;
  }

  &:active {
    background: #12b886;
  }
`
