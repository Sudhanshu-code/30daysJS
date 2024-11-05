var number = 1523;
console.log(number);
let string = "Sudhanshu";
console.log(string);

const bool = true;
console.log(bool);

let newObject = {
  name: "Sudhanshu",
  sureName: "Gupta",
  age: 22,
  mobileNumber: 9653214585,
};

console.log("type of object: " + typeof newObject); //object

let newArray = [1, 5, 9, 6, 4, 7, 8];
console.log("type of array: " + typeof newArray); //object

let varOne = 25;
varOne = 30;
console.log(varOne);

const varTwo = "Ankit";
// varTwo = "Sudhanshu";  //throws error as constant var can't changed

function logTheType(type) {
  console.log(type);
  console.log(typeof type);
}

logTheType(5964);
logTheType("Sudhanshu");
