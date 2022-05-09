import { capitalize } from '../modules/capitalize'

test("alpha should return Alpha", () => {
  expect(capitalize('alpha')).toBe('Alpha')
})

test("breakfast should return Breakfast", () => {
  expect(capitalize('breakfast')).toBe('Breakfast')
})