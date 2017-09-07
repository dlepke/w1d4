function findWaldo(arr) {
  arr.forEach(function found(currentValue, index, array) {
    if (arr[index] === "Waldo") {
      console.log('Found Waldo at index ' + index + '!');
    }
  })
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);