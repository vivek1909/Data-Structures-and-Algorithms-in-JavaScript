function merge(arr1, arr2) {
  // create an empty array as final array
  let results = [];
  let i = 0,
    j = 0;

  // looping through the two arrays and comparing the elements, whichever is smallest store it in results array
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // if only array1 exists
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  // if only array2 exists
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

merge([1, 10, 50], [2, 14, 99, 100]);

// merge sort

// function for merge sort in a single array
function mergeSort(arr) {
  // if only one element is present
  if (arr.length <= 1) return arr;

  // define mid, left and right using recursion
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

mergeSort([10, 24, 76, 73, 86, 1, 9]);
