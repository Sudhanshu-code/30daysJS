const book = {
  title: "Atomic Habit",
  author: "Sudhanshu Gupta",
  year: 2024,
  details: function () {
    return `${this.title} is written by ${this.author} in years ${this.year}`;
  },
  updateYear: function (year) {
    this.year = year;
  },
};

console.log(book.title);
console.log(book.author);
console.log(book["title"]);
console.log(book["author"]);

console.log(book.details());
book.updateYear(2016);
console.log(book["year"]);

const library = {
  name: "Library of India",
  books: [
    book,
    {
      title: "Rich Dad Poor Dad",
      author: "Mohan Singh",
      year: 1996,
    },
    {
      title: "Rich Dad Poor Dad2",
      author: "harpreet Singh",
      year: 2005,
    },
    {
      title: "Rich Dad Poor Dad3",
      author: "Jacky chain",
      year: 2010,
    },
  ],
};

console.log(library.books[0]["author"]);

for (const key in book) {
  console.log(key, ": ", book[key]);
}

//log all the keys and values in an Object -->returns an array
console.log("All keys in Book object: ", Object.keys(book));
console.log("All values in Book object: ", Object.values(book));
