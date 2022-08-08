import {NextSeo} from 'next-seo'
import * as React from 'react'

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
    description,
    titleAppendSiteName = true,
    url,
    type = 'website',
    ogImage,
    date,
  } = meta || {}
  return (
    <div className={`px-5 min-h-screen flex w-full ${className}`}>
      <NextSeo
        title={title}
        description={description}
        titleTemplate={titleAppendSiteName ? `%s | Vojta.io` : undefined}
        openGraph={{
          title,
          description,
          type,
          url,
          images: ogImage ? [ogImage] : undefined,
          article: {
            publishedTime: date,
          },
        }}
        canonical={url}
        noindex={noIndex}
      />
      {children}
    </div>
  )
}

export default Layout
