function selectionSort(arr) {
  // outer loop
  for (var i = 0; i < arr.length; i++) {
    // assume lowest element as first element
    var lowest = i;

    // inner loop
    for (var j = i + 1; j < arr.length; j++) {
      // compare with other elements and if a minimum is found, then store that as lowest element
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    // if any other found with the minimum value, then swap using temp variable
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

selectionSort([8, 2, 7, 36, 84, 46, 100, 120, 76]);
