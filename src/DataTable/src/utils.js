import formatLength from '../../_utils/css/formatLength'

export function createClassObject (classString) {
  if (!classString) return {}
  if (typeof classString === 'string') {
    return classString.split(' ').filter(className => className).reduce((classObject, className) => {
      classObject[className] = true
      return classObject
    }, {})
  }
  return classString
}

export function createCustomWidthStyle (column, index, placement) {
  if (column.width) {
    const width = column.width
    return {
      width: formatLength(width)
    }
  }
  return null
}

export function setCheckStatusOfRow (checkedRowKeys, row, checked) {
  while (true) {
    const checkedRowIndex = checkedRowKeys.findIndex(checkedRowKey => checkedRowKey === row.key)
    if (~checkedRowIndex) checkedRowKeys.splice(checkedRowIndex, 1)
    else break
  }
  if (checked) checkedRowKeys.push(row.key)
}