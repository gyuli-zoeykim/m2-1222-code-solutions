/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x/y;
  },
  square: function (x) {
    return x*x;
  },
  sumAll: function (numbers) {
    var sumNumbers = 0;
    for (var sum of numbers) {
      sumNumbers += sum
    }
    return sumNumbers;
  },
  getAverage: function (numbers) {
    var sumNum = 0;
    for (var sum of numbers) {
      sumNum += sum
    }
    return sumNum/numbers.length;
  }
}
