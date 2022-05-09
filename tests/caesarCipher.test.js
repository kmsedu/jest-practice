import caesarCipher from '../modules/caesarCipher'

test('"aaabbbccc" is "dddeeefff", shift 3', () => {
  expect(caesarCipher('aaabbbccc', 3)).toBe('dddeeefff')
})

test('"jumpbuck in his tuckerbag" is "whzohpx va uvf ghpxreont", shift 65', () => {
  expect(caesarCipher('jumbuck in his tuckerbag', 65)).toBe('whzohpx va uvf ghpxreont')
})

test('"Good. Really, really good!" is "Nvvk. Ylhssf, ylhssf nvvk!", shift 7', () => {
  expect(caesarCipher('Good. Really, really good!', 7)).toBe('Nvvk. Ylhssf, ylhssf nvvk!')
})