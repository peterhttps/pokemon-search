import React from 'react';
import { ThemeProvider } from 'styled-components'

import Router from 'next/router'
import Head from 'next/head'

import NProgress from 'nprogress'

import theme from '../src/styles/theme'
import GlobalStyle from '../src/styles/global'


Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
  <>
   <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
    <ThemeProvider theme={theme}>

      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
    </>
    )
}

export default MyApp
