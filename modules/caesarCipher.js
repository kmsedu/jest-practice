const caesarCipher = (string, shift) => {
  const uppers = [...Array(26).keys()].map((num) => String.fromCharCode(num + 65))
  const lowers = [...Array(26).keys()].map((num) => String.fromCharCode(num + 97))

  const shifted = string.split('').map((char) => {
    if (!uppers.includes(char) && !lowers.includes(char)) return char

    if (uppers.includes(char)) {
      return uppers[(uppers.indexOf(char) + shift) % 26]
    }

    return lowers[(lowers.indexOf(char) + shift) % 26]
  }).join('')

  return shifted
}

export default caesarCipher
