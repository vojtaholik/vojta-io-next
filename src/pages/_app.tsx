import React from 'react'
import Script from 'next/script'
import {useRouter} from 'next/router'
import 'styles/globals.css'
import type {AppProps} from 'next/app'
import * as gtag from 'utils/ga'

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()
  React.useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-135029522-1`}
      />
      <Script strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-135029522-1', {
      page_path: window.location.pathname,
    });
  `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
