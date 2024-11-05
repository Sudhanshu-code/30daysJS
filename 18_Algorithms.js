const newArray = [15, 12, 18, 2, 7];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
}
// bubbleSort(newArray);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}
// selectionSort(newArray);

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  i++;
  let temp = arr[i];
  arr[i] = arr[high];
  arr[high] = temp;
  return i;
}
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    let pIdx = partition(arr, low, high);
    quickSort(arr, low, pIdx - 1);
    quickSort(arr, pIdx + 1, high);
  }
}
// quickSort(newArray);

console.log(newArray);

//searching algorithm

function linearSearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
// console.log(linearSearch(newArray, 2));

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const arrr = [5, 6, 7, 11, 455, 666];

console.log(binarySearch(arrr, 455));

function countOccurrence(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    if (count[str.charAt(i)]) {
      count[str.charAt(i)]++;
    } else {
      count[str.charAt(i)] = 1;
    }
  }
  return count;
}
console.log(countOccurrence("sudhanshu"));

function longestSubstringWithoutRepeatingChars(str) {
  let start = 0;
  let maxLength = 0;
  let charIndexMap = {};

  for (let end = 0; end < str.length; end++) {
    let char = str.charAt(end);

    if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
      start = Math.max(end, charIndexMap[char] + 1);
    }

    charIndexMap[char] = end;

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

let testString2 = "abcabcbbd";
console.log(
  "Length of longest substring without repeating characters:",
  longestSubstringWithoutRepeatingChars(testString2)
);
