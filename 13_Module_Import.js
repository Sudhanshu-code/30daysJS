import defaultExportFunt, {
  addTwoNum,
  person,
  subtract,
  multiply,
  divide,
} from "./13_Modules.js";

//import the entire 13_Modulles.js module as an object:
import * as moduleFunctions from "./13_Modules.js";
//import lodash
import _ from "lodash";
import axios from "axios";

//importing a function
const sum = addTwoNum(5, 3);
console.log(sum);

//importing a object and accessing properties and methods
console.log(person.greet());
person.changeInfo("Ankit", "Don");
console.log(person.greet());

//importing multiple function
console.log(subtract(8, 5));
console.log(multiply(8, 5));
console.log(divide(10, 5));

//importing and accessing default function
console.log(defaultExportFunt());

//accessing the functions from modules as object
console.log(moduleFunctions.addTwoNum(5, 55));

// Installed a third-party module (e.g., lodash , axios ) using npm. Import and use a function from this module in a script.

//using lodash->used for->Iterating arrays, objects, & strings
//Manipulating & testing values
//Creating composite functions
const array = [1, 2, 3, 4, 5, 6];
const reversedArray = _.reverse(array);
console.log(reversedArray);

//using axios
axios
  .get("https://api.github.com/users/sudhanshu-code")
  .then((res) => {
    return res.data;
  })
  .then((data) => {
    // console.log(data);
  })
  .catch((error) => {
    console.log("error: ", error);
  });
