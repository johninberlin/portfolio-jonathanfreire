import '../styles/globals.scss'
import Head from 'next/head'
import CustomCookieConsent from '../components/CustomCookieConsent'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} />
    <CustomCookieConsent />
  </>
}

export default MyApp
