import * as React from 'react'
import {GetStaticProps, GetStaticPaths} from 'next'
import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote'
import {notesFilePaths, NOTES_PATH} from '../../utils/mdx-utils'
import path from 'path'
import isArray from 'lodash/isArray'
import kebabCase from 'lodash/kebabCase'
import fs from 'fs'
import matter from 'gray-matter'
import NoteTemplate from 'templates/note-template'
import MDXComponents from 'components/mdx/mdx-components'
import Link from 'next/link'

const components = MDXComponents

interface Props {
  mdxSource: MDXRemoteSerializeResult
  frontmatter: any
}

export default function Note({mdxSource, frontmatter}: Props) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <NoteTemplate>
      <div className="prose sm:prose-lg mx-auto">
        <Link href="/notes">
          <a className="absolute top-10 left-10 text-xs">
            {'\u2190'} All Notes
          </a>
        </Link>
        {frontmatter?.title && <h1>{frontmatter.title}</h1>}
        {mounted && <MDXRemote {...mdxSource} components={components} />}
      </div>
    </NoteTemplate>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  if (!params?.slug || isArray(params?.slug)) {
    return {props: {}}
  }

  const noteFilePath = path.join(NOTES_PATH, `${params.slug}.md`)
  const source = fs.readFileSync(noteFilePath)
  const {content, data: frontmatter} = matter(source)
  const mdxSource = await serialize(content, {
    // components,
    mdxOptions: {
      remarkPlugins: [
        require('../../utils/remark-double-brackets'),
        require('../../utils/remark-img-to-js'),
      ],
      //   rehypePlugins: [require('rehype-slug')],
    },
    scope: {},
  })
  return {props: {mdxSource, frontmatter}}
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = notesFilePaths
    .map((path) => path.replace(/\.md?$/, ''))
    .map((path) => {
      return {params: {slug: path}}
    })
  return {
    paths,
    // paths: notesFilePathsWithDirs,
    fallback: false,
  }
}
