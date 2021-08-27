import Layout from 'components/layout'
import * as React from 'react'

const NoteTemplate: React.FC = ({children}) => {
  return (
    <Layout>
      <div className="prose mx-auto max-w-screen-lg w-full">{children}</div>
    </Layout>
  )
}

export default NoteTemplate
