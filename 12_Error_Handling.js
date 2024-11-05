//More error handling in 11_Promise_Async_Await

//Task 1: Write a Function that Intentionally Throws an Error and Use a Try-Catch Block to Handle the Error

function throwError() {
  throw new Error("This is an intentional error.");
}

try {
  throwError();
} catch (error) {
  console.error("Caught an error:", error.message);
}

//Task 2: Create a Function that Divides Two Numbers and Throws an Error if the Denominator is Zero. Use a Try-Catch Block to Handle This Error

function divide(a, b) {
  if (b === 0) {
    throw new Error("Denominator cannot be zero.");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.error("Error in division:", error.message);
}

//Task 3: Write a Script that Includes a Try-Catch Block and a Finally Block
try {
  console.log("Inside try block");
  throw new Error("An error occurred");
} catch (error) {
  console.error("Inside catch block:", error.message);
} finally {
  console.log("Inside finally block");
}

//Task 4: Create a Custom Error Class that Extends the Built-In Error Class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwCustomError() {
  throw new CustomError("This is a custom error.");
}

try {
  throwCustomError();
} catch (error) {
  if (error instanceof CustomError) {
    console.error("Caught a custom error:", error.message);
  } else {
    console.error("Caught an error:", error.message);
  }
}

//Task 5: Write a Function that Validates User Input and Throws a Custom Error if the Validation Fails
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
  if (typeof input !== "string" || input.trim() === "") {
    throw new ValidationError("Input cannot be an empty string.");
  }
  return "Valid input";
}

try {
  const result = validateInput("   ");
  console.log(result);
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation Error:", error.message);
  } else {
    console.error("Error:", error.message);
  }
}
