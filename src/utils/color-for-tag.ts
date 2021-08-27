export default function colorForTag(tag: string) {
  switch (tag) {
    case 'starred':
      return 'bg-amber-400'
    default:
      return 'bg-gray-500'
  }
}
