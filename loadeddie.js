function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var numRolls = -1;


  return function() {
    if (numRolls % (list.length - 1) === 0 && numRolls !== 0) {
      numRolls -= (list.length);
    }
    numRolls += 1;
    return list[numRolls];
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6