//1. Matching All Occurrences of "JavaScript" in a String
const text =
  "JavaScript is a versatile language. JavaScript can be used for both frontend and backend development.";

// Regular expression to match all occurrences of "JavaScript"
const regex = /JavaScript/g;

// Find all matches
const textMatches = text.match(regex);

console.log(textMatches); // Output: ["JavaScript", "JavaScript"]

// 2. Matching All Digits in a String
const text2 = "Suhdnasu 15 46 77 gupta";
const regex2 = /\d+/g; //get all the numbers from string: \d+ matches one or more digits in a row.
console.log(text2.match(regex2));

//3. Match All Words That Start with a Capital Letter
const text3 = "Alice and Bob are Talking to Charles in the City.";

// Regular expression to match words starting with a capital letter
const capitalizedWordsRegex = /\b[A-Z][a-z]*\b/g;

// Find all matches
const capitalizedWords = text.match(capitalizedWordsRegex);

console.log(capitalizedWords); // Output: ["Alice", "Bob", "Talking", "Charles", "City"]

//4. Match All Sequences of One or More Digits
const textWithDigits = "I have 123 apples, 45 bananas, and 6 oranges.";

// Regular expression to match sequences of one or more digits
const digitSequencesRegex = /\d+/g;

// Find all matches
const digitSequences = textWithDigits.match(digitSequencesRegex);

console.log(digitSequences); // Output: ["123", "45", "6"]

//5. Capture Area Code, Central Office Code, and Line Number from a US Phone Number
const phoneNumber = "(123) 456-7890";

// Regular expression to capture area code, central office code, and line number
const phoneRegex = /\((\d{3})\)\s(\d{3})-(\d{4})/;

// Use match() with capturing groups
const matches = phoneNumber.match(phoneRegex);

console.log(
  `Area Code: ${matches[1]}, Central Office Code: ${matches[2]}, Line Number: ${matches[3]}`
);
// Output: Area Code: 123, Central Office Code: 456, Line Number: 7890

//6. Capture Username and Domain from an Email Address
const email = "john.doe@example.com";

// Regular expression to capture username and domain
const emailRegex = /^([^@]+)@(.+)$/;

// Use match() with capturing groups
const emailMatches = email.match(emailRegex);

console.log(`Username: ${emailMatches[1]}, Domain: ${emailMatches[2]}`);
// Output: Username: john.doe, Domain: example.com

//7. Match a Word Only at the Beginning of a String
const text4 = "Hello world, Hello again.";

// Regular expression to match a word at the beginning
const wordAtStartRegex = /^Hello/;

// Find the match
const wordAtStart = text4.match(wordAtStartRegex);

console.log(wordAtStart); // Output: ["Hello"]

//8. Match a Word Only at the End of a String
const text5 = "Goodbye world, see you Goodbye";

// Regular expression to match a word at the end
const wordAtEndRegex = /Goodbye$/;

// Find the match
const matchAtEnd = text5.match(wordAtEndRegex);

console.log(matchAtEnd); // Output: ["Goodbye"]

//9. Validate a Simple Password
const password = "P@ssw0rd";

// Regular expression for password validation
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const isValidPassword = passwordRegex.test(password);

console.log(`Password is valid: ${isValidPassword}`); // Output: Password is valid: true

//10. Validate a URL
const url = "https://www.example.com";

// Regular expression for URL validation
const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

const isValidURL = urlRegex.test(url);

console.log(`URL is valid: ${isValidURL}`); // Output: URL is valid: true
