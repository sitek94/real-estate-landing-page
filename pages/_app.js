import App from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { palette, typography, space } from '../theme';

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
    font-family: ${typography.fontFamily};
    color: ${palette.primary.main};
    font-weight: 300;
    line-height: 1.6;
  }
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider 
        // Required to use styled-system's spacing
        theme={{ space }}
      >
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
