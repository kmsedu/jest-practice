export const reverseString = function (input) {
  if (typeof input !== 'string') input = `${input}`
  return input.split('').reverse().join('')
}
