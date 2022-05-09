const analyzeArray = (array) => {
  if (array.some((element) => typeof element !== 'number')) {
    return 'Array contains an element that is not a number'
  }

  const average = Array.from(array).reduce((i, j) => i + j, 0) / array.length
  const min = Array.from(array).reduce((i, j) => i < j ? i : j, 1)
  const max = Array.from(array).reduce((i, j) => i > j ? i : j, 1)
  const length = array.length

  return {
    average,
    min,
    max,
    length
  }
}

export default analyzeArray
