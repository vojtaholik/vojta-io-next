import {NextSeo} from 'next-seo'
import * as React from 'react'
import {cn} from 'utils/cn'

type LayoutProps = {
  children?: React.ReactNode
  className?: string
  meta?: any
  noIndex?: boolean
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className = '',
  meta,
  noIndex,
}) => {
  const {
    title,
    description = 'Vojta is a Design Engineer',
    titleAppendSiteName = true,
    url,
    type = 'website',
    hasOgImage = true,
    ogImage = {
      url: 'https://vojta.io/card@2x.png',
      width: 1280,
      height: 720,
    },
    date,
  } = meta || {}
  return (
    <div className={cn(`px-5 min-h-screen flex w-full`, className)}>
      <NextSeo
        title={title}
        description={description}
        titleTemplate={titleAppendSiteName ? `%s | Vojta.io` : undefined}
        openGraph={{
          title,
          description,
          type,
          url,
          images: hasOgImage ? [ogImage] : undefined,
          article: {
            publishedTime: date,
          },
        }}
        twitter={{
          cardType: hasOgImage ? 'summary_large_image' : undefined,
          handle: '@vojta_holik',
        }}
        canonical={url}
        noindex={noIndex}
      />
      {children}
    </div>
  )
}

export default Layout
