let number = 0;
if (number > 0) {
  console.log("number is positive");
} else if (number < 0) {
  console.log("number is negative ");
} else {
  console.log("number is zero");
}

let age = 19;
if (age > 18) {
  console.log("you are eligible for voting");
}

let a = 10;
let b = 50;
let c = 20;

if (a > b) {
  if (a > c) {
    console.log("a is greater");
  } else {
    console.log("c is greater");
  }
} else if (b > a) {
  if (b > c) {
    console.log("b is greater");
  } else {
    console.log("c is greater");
  }
}

let weekNumber = 3;

switch (weekNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("not a week day number");
    break;
}

let checkNumber = 11;
checkNumber % 2 == 0 ? console.log("even number") : console.log("Odd number");

let year = 2003;

if (year % 4 == 0 || (year % 100 != 0 && year % 400 == 0)) {
  console.log(year, " is a leap year");
} else {
  console.log(year, " is not a leap year");
}
