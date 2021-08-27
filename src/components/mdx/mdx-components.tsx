import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const MDXComponents = {
  a: (props: any) => (
    <Link {...props}>
      <a
        target={props.href.includes('http') ? '_blank' : '_self'}
        className="group transition-all hover:text-blue-100"
      >
        {props.children.includes('[[') && props.children.includes(']]') ? (
          <>
            <span className="text-blue-300 opacity-60 group-hover:opacity-40 transition-all">
              [[
            </span>
            {props.children.replace('[[', '').replace(']]', '')}
            <span className="text-blue-300 opacity-60 group-hover:opacity-40 transition-all">
              ]]
            </span>
          </>
        ) : (
          props.children
        )}
      </a>
    </Link>
  ),
  img: ({src, ...props}: any) => {
    const Img = () => (
      <img
        src={src}
        {...props}
        className="mb-0 mt-0 group-hover:scale-105 transition-all duration-1000"
      />
    )
    return src.includes('http') ? (
      <div className="group overflow-hidden">
        {props?.alt?.includes('http') ? (
          <a href={props.alt} target="_blank">
            <Img />
          </a>
        ) : (
          <Img />
        )}
      </div>
    ) : (
      <div className="lg:-mx-16 sm:-mx-10">
        <div className="relative aspect-w-16 aspect-h-9">
          {/* this is actually being overwritten by 
          remark-img-to-js which is a good thing */}
          <Image
            src={`/notes/${src}`}
            layout="fill"
            objectFit="contain"
            {...props}
          />
        </div>
      </div>
    )
  },
  BottomSeparator: () => {
    return (
      <div>
        <hr />
        <span className="text-sm uppercase font-semibold tracking-wide font-mono">
          Referenced Notes
        </span>
      </div>
    )
  },
  ImageGrid: (props: any) => {
    return (
      <div className="grid grid-cols-2 gap-5 lg:-mx-32 md:-mx-20 sm:-mx-5">
        {props.children}
      </div>
    )
  },
  Image,
}

export default MDXComponents
