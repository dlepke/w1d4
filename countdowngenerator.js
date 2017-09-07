var countdownGenerator = function(x) {
  var num = x + 1;

  return function() {
    if (num > 0) {
      num -= 1;
      return 'T-minus ' + num + '...'
    }
    if (num < 0) {
      num -= 1;
      return 'Rockets already gone, bub!'
    }
    if (num == 0) {
      num -= 1;
      return 'Blast Off!'
    }
  }
};

var countdown = countdownGenerator(10);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!