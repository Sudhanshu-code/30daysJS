//Lexical Scope -> inner function has the access of scope of outer function

//closure -> when you return a function it not only returns the function but also returns the lexical scope of the function

//Closures allow you to create functions with private variables that can be accessed and modified only through specific methods. This provides a way to encapsulate and protect data, ensuring it can only be manipulated in controlled ways.

//1.a Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outer() {
  let userName = "Sudhanshu";
  function inner() {
    console.log("inner function", userName);
  }
  return inner;
}
outer()();

//1.b Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter
function createCounter() {
  let counter = 0;
  return {
    increment() {
      counter++;
    },
    decrement() {
      counter--;
    },
    getValue() {
      return counter;
    },
  };
}

const counter = createCounter();
counter.increment();
// console.log(counter.getValue());
counter.decrement();
// console.log(counter.getValue());

//2.a Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function generateUniqueId() {
  return Math.floor(Math.random() * 100000 + 10000);
}

function createID() {
  let id = generateUniqueId();

  return function () {
    id++;
    return id;
  };
}
const generateId = createID();
console.log(generateId());
console.log(generateId());

const idGenerate = createID();
console.log(idGenerate());
console.log(idGenerate());

console.log(generateId());

//3 a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
// createFunctions.js
const createFunctions = () => {
  const functions = [];

  for (let i = 0; i < 10; i++) {
    // Use a closure to capture the current index
    functions.push(
      ((index) => {
        return () => {
          console.log(index);
        };
      })(i)
    );
  }

  return functions;
};

// Create the array of functions
const functionsArray = createFunctions();

// Test the functions
console.log(functionsArray[2]);

//4 Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

const createItmeManager = () => {
  const items = [];
  return {
    addItem(item) {
      items.push(item);
      console.log(`${item} added to items`);
    },
    removeItem(item) {
      const itemIndex = items.indexOf(item);
      if (itemIndex !== -1) {
        items.splice(itemIndex, 1);
        console.log(`${item} removed from the items`);
      } else {
        console.log("Item not found");
      }
    },
    listItem() {
      if (items.length > 0) {
        items.forEach((item, index) => {
          console.log(`${index + 1}--> ${item}`);
        });
      } else {
        console.log(" No itmes in the collection");
      }
    },
  };
};

const itemManager = createItmeManager();
itemManager.addItem("Apple");
itemManager.addItem("Mango");
itemManager.addItem("Grapes");
itemManager.addItem("Peers");
itemManager.listItem();
itemManager.removeItem("Mango");
itemManager.listItem();

//5 a. Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
// memoize.js
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args); // Create a unique key for the arguments
    if (cache[key]) {
      console.log("Returning cached result for", key);
      return cache[key];
    } else {
      console.log("Computing result for", key);
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

// Example usage with a simple function
function add(a, b) {
  return a + b;
}

// const memoizedAdd = memoize(add);

// console.log(memoizedAdd(1, 2)); // Output: Computing result for [1,2] => 3
// console.log(memoizedAdd(1, 2)); // Output: Returning cached result for [1,2] => 3
// console.log(memoizedAdd(2, 3)); // Output: Computing result for [2,3] => 5
// console.log(memoizedAdd(1, 2)); // Output: Returning cached result for [1,2] => 3

function factorialMemoize(funt) {
  const cache = {};
  return function (num) {
    if (cache[num]) {
      console.log("Returning Cache: ", num);
      return cache[num];
    } else {
      console.log("computing result: ", num);
      const result = funt(num);
      cache[num] = result;
      return result;
    }
  };
}

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

const memoiseFactorial = factorialMemoize(factorial);

console.log(memoiseFactorial(5));
console.log(memoiseFactorial(4));
console.log(memoiseFactorial(3));
console.log(memoiseFactorial(2));
console.log(memoiseFactorial(4));
console.log(memoiseFactorial(6));
