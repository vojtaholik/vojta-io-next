import React from 'react'
import 'styles/globals.css'
import type {AppProps} from 'next/app'
import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'
import {AnalyticsProvider} from 'use-analytics'

/* Initialize analytics & load plugins */
const analytics = Analytics({
  app: 'vojta-io',
  plugins: [
    googleAnalytics({
      trackingId: 'UA-135029522-1',
    }),
  ],
})

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <AnalyticsProvider instance={analytics}>
        <Component {...pageProps} />
      </AnalyticsProvider>
    </>
  )
}
export default MyApp
