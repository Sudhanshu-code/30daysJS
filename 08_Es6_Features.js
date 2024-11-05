//Template Literals
let name = "Sudhanshu";
let age = 24;

let detailsStr = `${name} is ${age} old men.`;
console.log(detailsStr);

let multiLineStr =
  "How are you? \nmy name is sudhanshu gupta\nwhat is your name?";
console.log(multiLineStr);

//Destructuring

//Use Array Destructuring to Extract the Elements
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [first, second] = numbers;
const [firstElm, , thirdElm, ...rest] = numbers; //one comma to skip the second elm and ...rest for all other reamaing elem as array

console.log("first: ", first, "\nsecond: ", second);
console.table([firstElm, thirdElm, rest]);

//Use Object Destructuring to Extract the Title and Author
const book = {
  title: "Atomic Habit",
  author: "Sudhanshu Gupta",
  year: 2024,
};

const { title, year } = book;
console.log("litle: ", title, "\nyear: ", year);

// spread and rest operators
const newNumbers = [...numbers, 10, 11, 12, 13]; //... to spread the all elm of numbers array
console.log(newNumbers);

//use the rest operator in a function to accept an arbitrary number of arguments sum then return the result

function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2));
console.log(sum(1, 3, 4, 5, 6));
console.log(sum(1, 3, 4, 5, 6, 7, 5, 8, 9));

//Use Enhanced Object Literals
const libraryName = "indian Library";
const books = [{ title: "Atomic Habit", author: "Sudhanshu Gupta" }];
const library = {
  name, // Shorthand for name: name
  books, // Shorthand for books: books
  addBook(book) {
    // Method definition without function keyword
    this.books.push(book);
  },
  listBooks() {
    // Another method definition
    this.books.forEach((book) => {
      console.log(`${book.title} by ${book.author}`);
    });
  },
};

console.log(library);
library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald" });
library.listBooks();
console.log(books);

//Create an Object with Computed Property Names

const property1 = "name";
const property2 = "age";

const person = {
  [property1]: "John Doe",
  [property2]: 30,
};

console.log(person);
