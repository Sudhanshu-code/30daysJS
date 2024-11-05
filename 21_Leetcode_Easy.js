//twosum problem - Brute Force Approach
function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return `${i} and ${j}`;
      }
    }
  }
  return -1;
}

const testArray = [1, 5, 9, 6, 4, 8];
// console.log(twoSum(testArray, 3));

//Oplimal Approach
//in map to set and get use .set() and .get() methods, you cant use map as regular object like map[i]
function twoSumOptimal(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      return `${map.get(complement)} and ${i}`;
    } else {
      map.set(arr[i], i);
    }
  }
  return -1;
}

console.log(twoSumOptimal(testArray, 12));

//reverse Integer

function reverseInteger(num) {
  let reverseNum = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return reverseNum;
}
// console.log(reverseInteger(12385));

function isNumberPalindrom(num) {
  let rverseNum = reverseInteger(num);
  return num === rverseNum;
}
console.log(isNumberPalindrom(12321));

//isvalid parentheses string

function isValidParenthese(str) {
  const stack = [];
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!map[char]) {
      stack.push(char);
    } else if (stack.pop() !== map[char]) {
      return false;
    }
  }
  return stack.length === 0;
}

let testStr = "{[()]}";
console.log(isValidParenthese(testStr));
