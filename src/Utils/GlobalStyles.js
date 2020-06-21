import { createGlobalStyle } from 'styled-components'
import { setColor, setFont } from './Styles'
const Globals = createGlobalStyle`
@font-face {
  font-family: 'Mansalva';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Mansalva Regular'), local('Mansalva-Regular'), url(https://fonts.gstatic.com/s/mansalva/v1/aWB4m0aacbtDfvq5NKliKY_NdDBh.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: local('Lato Black'), local('Lato-Black'), url(https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh50XSwaPGQ3q5d0N7w.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

*{
    padding:0;
    margin:0;
    box-sizing:content-box;
}
html{
    font-size:62.5%;
}
body{
    font-size:1.6rem;
    color:${setColor.mainBlack};
    background-color:${setColor.mainWhite};
    ${setFont.main}
}
h1{
    line-height: 1.2;
    margin-bottom: 0.5em;
}
`

export default Globals
