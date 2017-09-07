var wrapLog = function (formula, name) {
  var result = 0;

  return function (...args) { //when calling this for the area or volume functions, call as ...args otherwise just args
    result = formula(...args);
    return name + '(' + args.join(', ') + ') => ' + result;
  }

};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

console.log(logArea(5, 3)); // area(5, 3) => 15
console.log(logArea(3, 2)); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 30
console.log(logVolume(3, 2, 4)); // volume(3, 2, 4) => 24