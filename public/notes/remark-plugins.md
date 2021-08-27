---
title: Remark Plugins
date: '2021-07-20'
---

- [remark plugins for gatsby](https://github.com/mathieudutour/gatsby-digital-garden/tree/master/packages) by [Mathieu Dutour](https://github.com/mathieudutour) are great
- Writing MDX Plugin: https://mdxjs.com/guides/writing-a-plugin
- AST Explorer: https://astexplorer.net/

### Learn
- https://unifiedjs.com/learn/
- https://unifiedjs.com/learn/recipe/tree-traversal/
	- can visit multiple nodes at once
`visit(tree, ['comment', 'text'], function (node) {
  console.log([node.value])
})`

#### ecosystem packages
- https://unifiedjs.com/explore/project/


interesting libs
- https://unifiedjs.com/explore/package/mdast-util-find-and-replace/
-  unist-util-select https://unifiedjs.com/explore/package/unist-util-select/
- https://unifiedjs.com/explore/package/hast-util-embedded/
- images! https://unifiedjs.com/explore/package/remark-images/
- basics https://css-tricks.com/how-to-modify-nodes-in-an-abstract-syntax-tree/