function numberToThePowerOf(number, exponent) {
    var stringedNum = "(" + number + ")^" + exponent;

  if(Number.isInteger(number)) {
    return Math.pow(number, exponent);
  }
  else if(Number.isInteger(number) != true) {
    return stringedNum;
    }
}