let arrayNum = [1, 2, 3, 4, 5];
console.log(arrayNum);

console.log(arrayNum[0]);
console.log(arrayNum[arrayNum.length - 1]);

arrayNum.push(7);
arrayNum.push(8);
console.log("push 7, 8 : ", arrayNum);

arrayNum.pop();
console.log("reamove last element: ", arrayNum);

arrayNum.unshift(0);
arrayNum.unshift(9);
console.log("0 and 9 added to first place", arrayNum);

arrayNum.shift();
console.log("first element 9 removed: ", arrayNum);

const newArrayMap = arrayNum.map((num) => num * 2);
console.log(newArrayMap);
const newArrayFilter = arrayNum.filter((num) => num % 2 == 0);
console.log(newArrayFilter);
const arraySum = arrayNum.reduce((acc, currNum) => acc + currNum, 0); //returns a value
console.log(arraySum);

let arrayElem = "";
for (let i = 0; i < arrayNum.length; i++) {
  arrayElem += `${arrayNum[i]}, `;
}
console.log(arrayElem);

arrayNum.forEach((num) => console.log(num));

let TwoDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(TwoDArray);

let TwoDArrayElm = "";
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    TwoDArrayElm += TwoDArray[i][j];
  }
  TwoDArrayElm += "\n";
}

console.log(TwoDArrayElm);
