import App from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  palette: {
    primary: {
      main: '#c69963',
      dark: '#b28451'
    },
    secondary: {
      main: '#101d2c'
    },
    grey: {
      light1: '#f9f7f6',
      light2: '#aaa',
      dark1: '#54483A',
      dark2: '#6D5D4B'
    }
  },
  typography: {
    fontFamily: '"Nunito", sans-serif',
    displayFontFamily: '"Josefin Sans", sans-serif'
  }
}

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 10px/16px = 62.5% => 1rem = 10px
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 300;
    line-height: 1.6;
  }
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
