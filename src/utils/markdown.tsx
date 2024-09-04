import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

export const Markdown = ({
  children,
  className = '',
}: {
  children: string
  className?: string
}) => {
  return (
    <ReactMarkdown
      className={className}
      components={{
        a: (props) => {
          return props.href ? (
            <Link
              href={props.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium"
            >
              {props.children}
            </Link>
          ) : null
        },
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
