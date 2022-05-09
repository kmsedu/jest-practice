import analyzeArray from '../modules/analyzeArray'

test('returns an object', () => {
  expect(analyzeArray([])).toBeInstanceOf(Object)
})

test('has the correct properties', () => {
  expect(analyzeArray([])).toHaveProperty('average')
  expect(analyzeArray([])).toHaveProperty('min')
  expect(analyzeArray([])).toHaveProperty('max')
  expect(analyzeArray([])).toHaveProperty('length')
})

test('checks the average', () => {
expect(analyzeArray([1, 2, 3, 4, 5]).average).toBe(3)
})

test('checks the min', () => {
  expect(analyzeArray([1, 2, 3, 4]).min).toBe(1)
  expect(analyzeArray([1, 2, -1, 4]).min).toBe(-1)
  expect(analyzeArray([0, 2, 3, 4]).min).toBe(0)
})

test('checks the max', () => {
  expect(analyzeArray([1, 2, 3, 4]).max).toBe(4)
  expect(analyzeArray([1, 2, -1, 5]).max).toBe(5)
  expect(analyzeArray([8, 2, 3, 4]).max).toBe(8)
})

test('checks the length', () => {
  expect(analyzeArray([1, 2, 3, 4]).length).toBe(4)
  expect(analyzeArray([]).length).toBe(0)
  expect(analyzeArray([1]).length).toBe(1)
})

test('returns "Array contains an element that is not a number" when an element is not a number', () => {
  expect(analyzeArray(['a', 2, 3, 4])).toBe('Array contains an element that is not a number')
})