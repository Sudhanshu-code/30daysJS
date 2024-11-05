function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log("Factorial: ", factorial(5));

//Fibonacci

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci: ", fibonacci(8));

//Use default parameters for better readability.
//2.a sum of elem in an array

function sumArray(arr, i = 0, sum = 0) {
  //Use default parameters for better readability.

  if (arr.length === i) {
    return sum;
  }

  return sumArray(arr, i + 1, sum + arr[i]);
}

let newArr = [1, 2, 3, 4, 5];
console.log("Sum of array elem", sumArray(newArr));

//2.b. Max elem in an array

function maxElem(arr, i = 0, max = -Infinity) {
  //Use default parameters for better readability.
  if (arr.length === i) {
    return max;
  } else if (max < arr[i]) {
    max = arr[i];
  }
  return maxElem(arr, i + 1, max);
}

console.log("Max elem in array: ", maxElem(newArr));

//String Manipulation
//3.a reverse a string

function reverseString(str, len = str.length, reverseStr = "") {
  //Use default parameters for better readability.
  if (len < 0) {
    return reverseStr;
  } else {
    reverseStr += str.charAt(len);
  }
  return reverseString(str, --len, reverseStr);
}

let testString = "Sudhanshu";

console.log(reverseString(testString));

//string is palindrom or not
//1 Approach: 2 pointer approach
function isPalindrom(str, left = 0, right = str.length - 1) {
  if (left >= right) {
    return true;
  }
  if (str[left] !== str[right]) {
    return false;
  }
  return isPalindrom(str, left + 1, right - 1);
}
let palindromString = "racecar";
console.log(isPalindrom(palindromString));

//2 Approach: minus the first and last characters using substring method
function isStrPalindrom(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isStrPalindrom(str.substring(1, str.length - 1)); //returns substring(start, end)
}
console.log(isStrPalindrom(palindromString));

//4.Recursive Search
//4a.. Binary Search

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  let mid = Math.floor((start + end) / 2);

  if (start > end) {
    return -1;
  }

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  }

  return binarySearch(arr, target, start, mid - 1);
}

let sortedArray = [5, 9, 12, 15, 17, 20, 9];
console.log(binarySearch(sortedArray, 20));

//4b.function to count occurence of the targeted element
function countTarget(arr, target, count = 0, start = 0) {
  if (start > arr.length - 1) {
    return count;
  }

  if (arr[start] === target) {
    count++;
  }

  return countTarget(arr, target, count, start + 1);
}
console.log(countTarget(sortedArray, 9));
