// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import Script from 'next/script'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Link Styles Bootstrap */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />

        {/* Link Icon Bootstrap */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css"></link>

        {/* Link Font Awesome 5 */}
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"/>
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
    </>
  )  
}

export default MyApp
