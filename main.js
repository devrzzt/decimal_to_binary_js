function binaryToDecimal(num) {
  // * num: string

  num = parseInt(num)
  const arrQuotient = [] // * arrQuotient: number[]
  const arrRest = [] // * arrRest: number[]

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
