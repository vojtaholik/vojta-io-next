import * as React from 'react'
import {GetStaticProps} from 'next'
import fs from 'fs'
import Link from 'next/link'
import {notesFilePaths, NOTES_PATH} from '../../utils/mdx-utils'
import Layout from 'components/layout'
import matter from 'gray-matter'
import path from 'path'
import colorForTag from 'utils/color-for-tag'

const NotesIndex: React.FC<{notes: any}> = ({notes}) => {
  return (
    <Layout>
      <div className="max-w-screen-sm w-full font-mono mx-auto">
        <ul>
          {notes &&
            notes
              .filter(
                (note: any) => !note?.frontmatter?.tags?.includes('draft'),
              )
              .map((note: any) => {
                const slug = note.name.replace('.md', '')

                return (
                  <li key={slug}>
                    <Link href={`/notes/${slug}`}>
                      <a className="opacity-80 hover:opacity-100 transition-all flex items-center relative">
                        {note.frontmatter.tags &&
                          note.frontmatter.tags.map((tag: string) => (
                            <i
                              key={tag}
                              className={`${colorForTag(
                                tag,
                              )} inline-flex w-3 h-3 absolute -left-5`}
                            />
                          ))}
                        {note.name}
                      </a>
                    </Link>
                  </li>
                )
              })}
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const notes = notesFilePaths.map((note) => {
    const source = fs.readFileSync(path.join(NOTES_PATH, note))
    const {content, data: frontmatter} = matter(source)
    return {name: note, frontmatter}
  })

  return {props: {notes}}
}

export default NotesIndex
