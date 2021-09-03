import * as React from 'react'
// @ts-ignore
import {useAnalytics} from 'use-analytics'

const Layout: React.FC<{className?: string}> = ({children, className = ''}) => {
  const {page} = useAnalytics()
  React.useEffect(() => {
    page()
  }, [])

  return (
    <div className={`px-5 min-h-screen flex w-full ${className}`}>
      {children}
    </div>
  )
}

export default Layout
