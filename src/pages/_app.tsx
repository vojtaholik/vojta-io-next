import React from 'react'
import 'styles/globals.css'
import type {AppProps} from 'next/app'
import {DefaultSeo} from 'next-seo'
import SEO from '../../config'
import {MDXProvider} from '@mdx-js/react'
import {Toaster} from 'react-hot-toast'
import {maisonNeue, maisonNeueMono, departureMono} from 'utils/load-fonts'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <MDXProvider>
        <Toaster position="top-center" />
        <main
          className={`${maisonNeue.variable} ${maisonNeueMono.variable} ${departureMono.variable} font-sans font-light`}
        >
          <Component {...pageProps} />
        </main>
      </MDXProvider>
    </>
  )
}
export default MyApp
