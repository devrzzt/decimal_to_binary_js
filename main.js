function binaryToDecimal(num) {
  //
  num = parseInt(num)
  const arrQuotient = []
  const arrRest = []

  let i = 0
  while (num >= 2) {
    arrQuotient[i] = Math.floor(num / 2)
    arrRest[i] = num % 2

    num = arrQuotient[i]
    i++
  }

  arrRest.push(1)
  arrRest.reverse()

  return arrRest
}

console.log(binaryToDecimal('205'))
