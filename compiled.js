var doubleThenSum, getCharactersByOffset, getNumeric, sum, sumTwoDigits, validateLuhnChecksum;

getNumeric = function(input) {
  var string;
  string = input.toString();
  return string.replace(/\D/g, '');
};

getCharactersByOffset = function(string, offset) {
  var arr, c, characters, index, _i, _len;
  if (offset == null) {
    offset = 0;
  }
  arr = string.split('');
  arr.reverse();
  characters = [];
  for (index = _i = 0, _len = arr.length; _i < _len; index = _i += 2) {
    c = arr[index];
    characters.push(arr[index + offset] * 1);
  }
  return characters;
};

sum = function(arr) {
  return arr.reduce(function(cumulation, thisNumber) {
    return cumulation + thisNumber;
  });
};

sumTwoDigits = function(number) {
  var singleNumber, splitNumber, totalForThisNumber, _i, _len;
  splitNumber = number.toString().split('');
  totalForThisNumber = 0;
  for (_i = 0, _len = splitNumber.length; _i < _len; _i++) {
    singleNumber = splitNumber[_i];
    totalForThisNumber += parseInt(singleNumber, 10);
  }
  return totalForThisNumber;
};

doubleThenSum = function(arr) {
  var d, doubled, total, _i, _len;
  total = 0;
  for (_i = 0, _len = arr.length; _i < _len; _i++) {
    d = arr[_i];
    doubled = d * 2;
    total += sumTwoDigits(doubled);
  }
  return total;
};

validateLuhnChecksum = function(cardNumber) {
  var checksum, digits, evenDigits, oddDigits;
  digits = getNumeric(cardNumber);
  oddDigits = getCharactersByOffset(digits);
  evenDigits = getCharactersByOffset(digits, 1);
  checksum = (sum(oddDigits)) + (doubleThenSum(evenDigits));
  return checksum % 10 === 0;
};

console.log('invalid example', validateLuhnChecksum('4552 7204 1224 5677'));

console.log('valid example', validateLuhnChecksum('4552 7204 1234 5677'));

console.log('valid', validateLuhnChecksum('1111111111111117'));

console.log('valid', validateLuhnChecksum('1111222233334444'));

console.log('valid', validateLuhnChecksum('1234567812341679'));

console.log('valid', validateLuhnChecksum('4408041234567893'));
