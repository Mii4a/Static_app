import React from 'react'
import { AppProps } from 'next/app'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialUIThemeProvider } from '@material-ui/core/styles'
import { StylesProvider } from '@material-ui/styles'
import theme from '../styles/theme.js'

const StaticApp = ({ Component, pageProps}: AppProps ): JSX.Element => {
  React.useEffect(() => {
    // Remove the server-side inject CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])

  return (
    <StylesProvider injectFirst>
       <MaterialUIThemeProvider theme={theme}>
         <StyledComponentsThemeProvider theme={theme}>
           <CssBaseline />
           <Component {...pageProps} />
         </StyledComponentsThemeProvider>
       </MaterialUIThemeProvider>
    </StylesProvider>
  )
}

export default StaticApp;