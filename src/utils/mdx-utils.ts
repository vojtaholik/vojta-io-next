import fs from 'fs'
import path from 'path'

const DIR = 'public/notes'
export const NOTES_PATH = path.join(process.cwd(), DIR)

export const notesFilePaths = fs
  .readdirSync(NOTES_PATH)
  .filter((path) => /\.md?$/.test(path))

// recursive
export function walk(directory: string) {
  let fileList: any[] = []

  const files = fs.readdirSync(directory)
  for (const file of files) {
    const p = path.join(directory, file)
    if (fs.statSync(p).isDirectory()) {
      fileList = [
        ...fileList,
        ...walk(p).filter((file) => /\.md?$/.test(file as any)),
      ]
    } else {
      fileList.push(p)
    }
  }
  return fileList.map((file) => {
    const parentDir = path.basename(path.dirname(file))

    return `${parentDir !== DIR ? `${parentDir}/` : ''}${path.basename(file)}`
    // return {
    //   params: {
    //     dir: parentDir,
    //     slug: path.basename(file),
    //   },
    // }
  })
}
