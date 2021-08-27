// based on https://github.com/mathieudutour/gatsby-digital-garden/tree/master/packages/gatsby-remark-double-brackets-link
import visit from 'unist-util-visit'
import slugify from 'slugify'

/**
 * if title is something like `folder1/folder2/name`,
 * will slugify the name, while keeping the folder names
 */
const defaultTitleToURLPath = (title: string) => {
  const segments = title.split('/')
  const slugifiedTitle = slugify(segments.pop() as string)
  return `${segments.join('/')}${
    segments.length === 1 ? '/' : ''
  }${slugifiedTitle}`
}

module.exports =
  (
    options = {
      stripBrackets: false,
      parseWikiLinks: false,
      path: 'notes/',
    },
  ) =>
  (tree: any, file: any) => {
    const titleToURL = defaultTitleToURLPath
    const definitions: {[identifier: string]: boolean} = {}

    visit(tree, 'definition', (node: any) => {
      if (!node.identifier || typeof node.identifier !== 'string') {
        return
      }
      definitions[node.identifier] = true
    })

    let linkReferences: any = []

    visit(tree, 'linkReference', (node: any, index: any, parent: any) => {
      if (
        node.referenceType !== 'shortcut' ||
        (typeof node.identifier === 'string' && definitions[node.identifier])
      ) {
        return
      }
      const siblings = parent?.children
      if (!index || !siblings || !Array.isArray(siblings)) {
        return
      }
      // to fix: this is wrong, ![[ means embed and not only an image
      // Image check
      const isImage: boolean = siblings[index - 1].value.includes('!')
      console.log(isImage)

      const previous: any = siblings[index - 1]
      const next: any = siblings[index + 1]

      if (!previous || !next) {
        return
      }

      if (
        previous.type !== 'text' ||
        !previous.value ||
        previous.value[previous.value.length - 1] !== '[' ||
        next.type !== 'text' ||
        next.value[0] !== ']'
      ) {
        return
      }

      previous.value = isImage
        ? previous.value.replace('!', '').replace(/\[$/, '')
        : previous.value.replace(/\[$/, '')
      next.value = next.value.replace(/^\]/, '')

      let heading = ''

      if (options?.parseWikiLinks && Array.isArray(node.children)) {
        let label = node.label as string
        if (label.match(/#/) && Array.isArray(node.children)) {
          // @ts-ignore
          ;[node.children[0].value, heading] = label.split('#')
          ;[heading] = heading.split('|')
          node.label = label.replace(`#${heading}`, '')
        }

        label = node.label as string
        if (label.match(/\|/)) {
          // @ts-ignore
          ;[node.label, node.children[0].value] = label.split('|')
        }
      }

      if (!options?.stripBrackets && Array.isArray(node.children)) {
        // @ts-ignore
        node.children[0].value = `[[${node.children[0].value}]]`
      }
      // @ts-ignore
      node.type = isImage ? 'image' : 'link'

      // @ts-ignore
      node.url = `${titleToURL(node.label as string)}${
        heading
          ? `#${slugify(heading, {
              lower: true,
            })}`
          : ''
      }`
      // @ts-ignore
      node.title = node.label

      !isImage && linkReferences.push({url: node.url, value: node.title})

      delete node.label
      // @ts-ignore
      delete node.referenceType
      // @ts-ignore
      delete node.identifier
    })

    linkReferences.forEach((linkRef: any, i: number) => {
      visit(tree, 'root', (node: any) => {
        i === 0 &&
          node.children.push({
            type: 'jsx',
            value: '<BottomSeparator />',
          })

        node.children.push(
          {
            type: 'link',
            url: linkRef.url,
            children: [
              {
                type: 'text',
                value: linkRef.value,
              },
            ],
          },
          {
            type: 'html',
            value: '<br />',
          },
        )
      })
    })

    const internalLinks = file.contents.match(/(?<=\[\[)([^\[\]]*)(?=\]\])/g)
  }
