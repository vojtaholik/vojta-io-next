import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

/* Initialize analytics */
export const analytics = Analytics({
  app: 'vojta.io',
  plugins: [
    googleAnalytics({
      trackingId: 'UA-135029522-1',
    }),
  ],
})

/* Track a page view */
// analytics.page()

/* Track a custom event */
// analytics.track('userPurchase', {
//   price: 20,
//   item: 'pink socks',
// })

/* Identify a visitor */
// analytics.identify('user-id-xyz', {
//   firstName: 'bill',
//   lastName: 'murray',
//   email: 'da-coolest@aol.com',
// })
