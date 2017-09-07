function map(arrayToMap, callbackFunction) {
  var newArray = [];
  arrayToMap.forEach(function (arrayToMap) {
    newArray.push(callbackFunction(arrayToMap));
  })
  //console.log(newArray);
  return newArray;
}

// var words = ["ground", "control", "to", "major", "tom"];

// map(words, function(word) {
//   return word.length;
// });


// map(words, function(word) {
//   return word.toUpperCase();
// });



// map(words, function(word) {
//   return word.split('').reverse().join('');
// });



// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]