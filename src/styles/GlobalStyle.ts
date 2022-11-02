import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard Variable';
    font-weight: 45 920;
    font-style: normal;
    font-display: swap;
    src: local('Pretendard Variable'), url('/fonts/PretendardVariable.woff2') format('woff2-variations');
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    line-height: 1.3;
    font-family: 'Pretendard Variable', sans-serif;
  }
`

export default GlobalStyle
