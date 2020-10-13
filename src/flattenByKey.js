export default function flattenByKey(items = [], key = '') {
  return items.reduce((all, item) => {
    if (Array.isArray(item[key])) {
      return [...all, ...item[key].map(subItem => ({ ...item, [key]: subItem }))]
    }
    return [...all, item]
  }, [])
}
