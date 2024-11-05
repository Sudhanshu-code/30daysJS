//exporting a function

export const addTwoNum = (a, b) => {
  return a + b;
};

//exporting an object with properties and methods
export const person = {
  name: "Sudhanshu",
  lastName: "Gupta",
  greet() {
    return `Hello ${this.name} ${this.lastName}`;
  },
  changeInfo(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  },
};

//exporting multiple function
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

export { subtract, multiply, divide };

export default () => {
  return "This is a export default function";
};
