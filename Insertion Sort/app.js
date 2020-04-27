function insertionSort(arr) {
  // outer loop
  for (var i = 0; i < arr.length; i++) {
    // store the current element of array in a variable
    var currentVal = arr[i];

    // inner loop
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // swap if 2nd element is greater than it's previous
      arr[j + 1] = arr[j];
    }
    // make that the current element now
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([8, 2, 7, 36, 84, 46, 100, 120, 76]);
