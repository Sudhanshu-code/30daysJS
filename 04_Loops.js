for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let number = 5;
for (let i = 1; i <= 10; i++) {
  console.log(number, "*", i, " =", number * i);
}

let num = 1;
let sum = 0;
while (num <= 10) {
  sum += num;
  num++;
}
console.log(sum);

let reverseNum = 10;
while (reverseNum >= 1) {
  console.log(reverseNum);
  reverseNum--;
}

let a = 1;
do {
  console.log(a);
  a++;
} while (a < 6);

let factNum = 5;
let factorial = 1;

do {
  factorial *= factNum;
  factNum--;
} while (factNum >= 1);
console.log(factorial);

for (let index = 1; index <= 5; index++) {
  let str = "";
  for (let j = 1; j <= index; j++) {
    str += "*";
  }
  console.log(str);
}

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
