// https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/7a07996e3adae8050710ce7a988546cc1be103f1/lib/img-to-jsx.js#L1

const visit = require('unist-util-visit')
const sizeOf = require('image-size')
const fs = require('fs')

module.exports = (options) => (tree) => {
  visit(
    tree,
    // only visit p tags that contain an img element
    (node) =>
      node.type === 'paragraph' &&
      node.children.some((n) => n.type === 'image'),
    (node) => {
      const imageNode = node.children.find((n) => n.type === 'image')

      // only local files
      if (fs.existsSync(`${process.cwd()}/public/notes/${imageNode.url}`)) {
        const dimensions = sizeOf(
          `${process.cwd()}/public/notes/${imageNode.url}`,
        )
        console.log({imageNode})
        // Convert original node to next/image
        imageNode.type = 'jsx'
        imageNode.value = `<Image
          alt={\`${imageNode.alt || ''}\`} 
          src={\`/notes/${imageNode.url}\`}
          width={${dimensions.width}}
          height={${dimensions.height}}
          quality={100}
      />`

        // Change node type from p to div to avoid nesting error
        node.type = 'div'
        node.children = [imageNode]
      }
    },
  )
}
