import React from 'react'
import 'styles/globals.css'
import type {AppProps} from 'next/app'
import {DefaultSeo} from 'next-seo'
import SEO from '../../config'
import {MDXProvider} from '@mdx-js/react'
import {Toaster} from 'react-hot-toast'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <MDXProvider>
        <Toaster position="top-center" />
        <Component {...pageProps} />
      </MDXProvider>
    </>
  )
}
export default MyApp
