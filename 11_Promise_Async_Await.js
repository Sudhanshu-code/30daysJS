//1.a Promise that resolves

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello Sudhanshu");
  }, 2000);
});

promise.then((message) => {
  console.log(message);
});

//1.bPromise that rejects
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Promise is rejected"));
  }, 3000);
});

promiseOne.catch((error) => {
  console.log(error.message);
});

//2. create a sequence of promises that simulate the fetching of data from a server. Chain the promises to log the messages in a specific order.

const connectToServer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Connected to the server");
      resolve("Connection established");
    }, 1000);
  });
};

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data fetched from the server.");
      resolve("Data Retrieved");
    }, 1500);
  });
};

const processData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data Processed.");
      resolve("Data processing Complete");
    }, 2000);
  });
};

//chain promises

connectToServer()
  .then((msg) => {
    //1second to complete
    console.log(msg);
    return fetchData();
  })
  .then((msg) => {
    // 1.5s +1s(previous promise resolve time)=2.5s
    console.log(msg);
    return processData();
  })
  .then((msg) => {
    //2s +2.5s(previous 2 promise resolve time)=4.5s
    console.log(msg);
  })
  .catch((error) => {
    console.log("error: ", error);
  });

// 3. using async await
//3.a resolve one
const resolvedValue = async () => {
  try {
    const result = await connectToServer();
    console.log(result);
  } catch (error) {
    console.log("Error: ", error);
  }
};
// resolvedValue();

//3.bfunction that handle a reject promise using try catch
const rejectPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("rejectPromise: Promise rejected"));
    }, 2500);
  });
};

const promiseReject = async () => {
  try {
    const result = await rejectPromise();
    console.log("reject promise: ", result);
  } catch (error) {
    console.log("Promise Rejected in rejectPromise: ", error);
  }
};

// promiseReject();

//4.fetch data from an api

//4.a using Promises
//there's no need to wrap the fetch call in a setTimeout using Promise constructor. You can use the fetch API directly since it already returns a "promise".
const fetchGitData = () => {
  return fetch("https://api.github.com/users/sudhanshu-code");
};

fetchGitData()
  .then((res) => {
    if (!res.ok) {
      // Check if the response is ok, otherwise throw an error
      //It's good practice to check if the response is OK (status in the range 200-299) and throw an error if it isn't. This makes your error handling more robust.
      //Adding a check for res.ok ensures that you handle HTTP errors gracefully.
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error in fetching gitData: ", error);
  });

//4.busing Async await
const fetchDataFromApi = async () => {
  try {
    const response = await fetch("https://api.github.com/users/sudhanshu-code");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("git data fetching fails: ", error);
  }
};

// fetchDataFromApi();

//5. Concurrent Promise

//5.a Promise.all
//Promise.all is used to wait for multiple promises to resolve. It returns a single promise that resolves when all of the promises in the iterable have resolved or rejects if any promise rejects.
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "First"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "Second"));

Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values); // ["First", "Second"]
  })
  .catch((error) => {
    console.error(error);
  });

//5.b Promise.race
//Promise.race returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.
const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, "third"));
const promise4 = new Promise((resolve) => setTimeout(resolve, 2000, "fourth"));

Promise.race([promise3, promise4])
  .then((value) => {
    console.log(value); // "third"
  })
  .catch((error) => {
    console.error(error);
  });
