//Function declaration
function EvenOdd(num) {
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
EvenOdd(7);

function square(num) {
  return num ** 2;
}
console.log(square(4));

//function expression
const MaxNum = function (num1, num2) {
  console.log(num1 > num2 ? `${num1} is greater` : `${num2} is greater`);
};
MaxNum(7, 4);

const ConcatString = function (str1, str2) {
  return str1 + str2;
};

console.log(ConcatString("Sudhanshu", "gupta"));

//Arrow function
const addNums = (num1, num2) => {
  return num1 + num2;
};
addNums(45, 5);

const CheckStr = (str, char) => {
  if (str.includes(char)) {
    return true;
  }
  return false;
};

console.log("string contains: ", CheckStr("sudhanshu", "j"));

//Function parameters and default value

function Product(num1, num2 = 5) {
  return num1 * num2;
}

console.log("product: ", Product(6));

function greet(name, age = 20) {
  return `Hello ${name}, age ${age}`;
}

console.log(greet("sudhanshu"));

//High Order Functions
function repeatFunction(funt, num) {
  return () => {
    for (let i = 0; i < num; i++) {
      funt();
    }
  };
}

const fuct = function () {
  console.log("Hello Sudhanshu");
};
const sayhello = repeatFunction(fuct, 3);
sayhello();

function HOfunction(funt1, funt2, val) {
  return funt2(funt1(val));
}

const addTwo = function (val) {
  return val + 2;
};
const squareNum = function (val) {
  return val ** 2;
};

console.log(HOfunction(addTwo, squareNum, 8));
