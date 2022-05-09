import calculator from '../modules/calculator'

test('is an object', () => {
  expect(calculator).toBeInstanceOf(Object)
})

test('has correct properties', () => {
  expect(calculator).toHaveProperty('add')
  expect(calculator).toHaveProperty('subtract')
  expect(calculator).toHaveProperty('divide')
  expect(calculator).toHaveProperty('multiply')
})

test('can add', () => {
  expect(calculator.add(1, 5)).toBe(6)
  expect(calculator.add(5, 5)).toBe(10)
  expect(calculator.add(-15, 10)).toBe(-5)
})

test('can subtract', () => {
  expect(calculator.subtract(10, 5)).toBe(5)
  expect(calculator.subtract(50, 5)).toBe(45)
  expect(calculator.subtract(-15, 10)).toBe(-25)
})

test('can divide', () => {
  expect(calculator.divide(20, 5)).toBe(4)
  expect(calculator.divide(5, 5)).toBe(1)
  expect(calculator.divide(150, 10)).toBe(15)
})

test('can multiply', () => {
  expect(calculator.multiply(1, 5)).toBe(5)
  expect(calculator.multiply(5, 5)).toBe(25)
  expect(calculator.multiply(-15, 10)).toBe(-150)
})
