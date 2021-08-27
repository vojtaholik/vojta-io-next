import React from 'react'
import {useRouter} from 'next/router'
import 'styles/globals.css'
import type {AppProps} from 'next/app'
import * as ga from 'utils/ga'

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()

  React.useEffect(() => {
    const handleRouteChange = (url: any) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}
export default MyApp
