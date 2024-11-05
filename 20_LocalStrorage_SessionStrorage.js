localStorage.setItem("name", "sudhanshu gupta");

// console.log("the name is: ", localStorage.getItem("name"));

const details = {
  name: "Sudhanshu",
  lastName: "Gupta",
  age: 22,
};

localStorage.setItem("details", JSON.stringify(details));
// console.log(JSON.parse(localStorage.getItem("details")));

//save login data and fetch
const form = document.getElementById("form");
const showData = document.getElementById("displayData");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  localStorage.setItem("user", JSON.stringify({ name, lastName }));
  displayData();
});

function displayData() {
  const data = JSON.parse(localStorage.getItem("user"));
  if (data) {
    showData.textContent = `name: ${data.name} last Name: ${data.lastName}`;
  }
}
window.onload = displayData;

//Remove an Item from localStorage
// Save a value to localStorage
localStorage.setItem("tempData", "This is temporary data");

// Log localStorage content before removal
console.log("Before removal:", localStorage.getItem("tempData")); // Output: "This is temporary data"

// Remove the item from localStorage
localStorage.removeItem("tempData");

// Log localStorage content after removal
console.log("After removal:", localStorage.getItem("tempData")); // Output: null

//Save and Retrieve a String Value in sessionStorage
// Save a string value to sessionStorage
sessionStorage.setItem("mySessionString", "Hello, Session!");

// Retrieve the string value from sessionStorage
const retrievedSessionString = sessionStorage.getItem("mySessionString");

// Log the retrieved value
console.log(retrievedSessionString); // Output: "Hello, Session!"

//Save and Retrieve an Object in sessionStorage
// Define an object
const mySessionObject = { username: "JaneDoe", age: 25 };

// Convert the object to a JSON string and save it to sessionStorage
sessionStorage.setItem("sessionUser", JSON.stringify(mySessionObject));

// Retrieve the JSON string from sessionStorage and parse it back to an object
const retrievedSessionObject = JSON.parse(
  sessionStorage.getItem("sessionUser")
);

// Log the retrieved object
console.log(retrievedSessionObject); // Output: { username: 'JaneDoe', age: 25 }

//Remove an Item from sessionStorage
// Save a value to sessionStorage
sessionStorage.setItem("tempSessionData", "This is temporary session data");

// Log sessionStorage content before removal
console.log("Before removal:", sessionStorage.getItem("tempSessionData")); // Output: "This is temporary session data"

// Remove the item from sessionStorage
sessionStorage.removeItem("tempSessionData");

// Log sessionStorage content after removal
console.log("After removal:", sessionStorage.getItem("tempSessionData")); // Output: null

//Save a Value to Both localStorage and sessionStorage
function saveToBothStorages(key, value) {
  // Save to both localStorage and sessionStorage
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);

  // Retrieve and log the values from both storages
  const localStorageValue = localStorage.getItem(key);
  const sessionStorageValue = sessionStorage.getItem(key);

  console.log(`localStorage: ${localStorageValue}`); // Output: the value
  console.log(`sessionStorage: ${sessionStorageValue}`); // Output: the value
}

// Example usage
saveToBothStorages("sharedKey", "This is a shared value");

//Clear All Data from Both localStorage and sessionStorage
function clearAllStorages() {
  // Clear all data from localStorage and sessionStorage
  localStorage.clear();
  sessionStorage.clear();

  // Verify that both storages are empty
  console.log("localStorage is empty:", localStorage.length === 0); // Output: true
  console.log("sessionStorage is empty:", sessionStorage.length === 0); // Output: true
}

// Example usage
clearAllStorages();
