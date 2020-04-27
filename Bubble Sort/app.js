function bubbleSort(arr) {
  var noSwaps;

  // start the outer loop from left
  for (var i = arr.length; i > 0; i--) {
    // create a variable for checking if we need swapping or not
    noSwaps = true;

    // inner loop starts from index 0
    for (var j = 0; j < i - 1; j++) {
      // conditional check if the first element is greater than the second, if so swap them using temp and set noSwaps to false
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }

    // if no swaps needed, break from loop (loop termination condition)
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 2, 7, 36, 84, 46, 100, 120, 76]);
