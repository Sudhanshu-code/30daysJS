let a = 15;
let b = 10;

let sum = a + b;
let subt = a - b;
let multi = a * b;
let div = a / b;
let remainder = a % b;

a += 5;
b -= 5;

let compare = a > b;
let compare1 = a < b;
let compare2 = a <= b;
let compare3 = a <= b;
let compare4 = a == b;
let compare5 = a === b;

let logical = 5 > 2 && 5 < 2;
let logical1 = 5 > 2 || 5 < 2;
let notLogical = !logical;

let correct = a > b ? "true" : "false";

console.table([
  sum,
  subt,
  multi,
  div,
  remainder,
  a,
  b,
  compare,
  compare1,
  compare2,
  compare3,
  compare4,
  compare5,
  logical,
  logical1,
  notLogical,
  correct,
]);
