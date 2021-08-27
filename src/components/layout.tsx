import * as React from 'react'

const Layout: React.FC<{className?: string}> = ({children, className = ''}) => {
  return (
    <div
      className={`sm:py-24 py-16 px-5 min-h-screen flex w-full ${className}`}
    >
      {children}
    </div>
  )
}

export default Layout
