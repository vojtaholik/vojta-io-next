import React from 'react'
import 'styles/globals.css'
import type {AppProps} from 'next/app'
import {DefaultSeo} from 'next-seo'
import SEO from '../../config'
import {MDXProvider} from '@mdx-js/react'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  )
}
export default MyApp
