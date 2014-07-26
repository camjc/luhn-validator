getNumeric = (input) ->
  string = input.toString()
  return string.replace /\D/g, '' # Remove non-digits


getCharactersByOffset = (string, offset = 0) ->
  arr = string.split ''
  arr.reverse()
  characters = []
  for c, index in arr by 2
    characters.push arr[index+offset]*1
  return characters # is an Array


sum = (arr) ->
  return arr.reduce (cumulation, thisNumber) -> cumulation + thisNumber # is a Number


sumTwoDigits = (number) ->
  splitNumber = number.toString().split ''
  totalForThisNumber = 0
  for singleNumber in splitNumber
    totalForThisNumber += parseInt singleNumber, 10
  return totalForThisNumber # is a Number


doubleThenSum = (arr) ->
  total = 0
  for d in arr
    doubled = d*2
    total += (sumTwoDigits doubled)
  return total # is a Number


validateLuhnChecksum = (cardNumber) ->
  digits = getNumeric cardNumber
  oddDigits = getCharactersByOffset digits
  evenDigits = getCharactersByOffset digits, 1
  checksum = (sum(oddDigits)) + (doubleThenSum(evenDigits))
  return checksum % 10 is 0 # is True or False

console.log 'invalid example', validateLuhnChecksum '4552 7204 1224 5677'
console.log 'valid example', validateLuhnChecksum '4552 7204 1234 5677'
console.log 'valid', validateLuhnChecksum '1111111111111117'
console.log 'valid', validateLuhnChecksum '1111222233334444'
console.log 'valid', validateLuhnChecksum '1234567812341679'
console.log 'valid', validateLuhnChecksum '4408041234567893'
