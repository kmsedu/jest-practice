import { reverseString } from '../modules/reverseString'

test('reverses strings', () => {
  expect(reverseString('Test string')).toBe('gnirts tseT')
})

test('works with numbers', () => {
  expect(reverseString(123456)).toBe('654321')
})
