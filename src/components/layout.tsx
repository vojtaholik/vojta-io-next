import * as React from 'react'

type LayoutProps = {
  children?: React.ReactNode
  className?: string
}

const Layout: React.FC<LayoutProps> = ({children, className = ''}) => {
  return (
    <div className={`px-5 min-h-screen flex w-full ${className}`}>
      {children}
    </div>
  )
}

export default Layout
