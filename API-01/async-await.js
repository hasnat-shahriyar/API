/*
`async` and `await` are features in JavaScript used to work with asynchronous code and Promises. They make it easier to write and manage asynchronous code, especially when dealing with operations like making API requests, reading files, or any other non-blocking tasks. Here's what each of these keywords does:

1. `async` function:
   - When a function is declared as `async`, it means that the function will always return a Promise.
   - This keyword is typically used to define functions that contain asynchronous operations.
   - Inside an `async` function, you can use the `await` keyword to pause the execution of the function until a Promise is resolved.
*/
// Example of declaring an `async` function:
// Javascript
async function fetchData() {
    // Asynchronous code here
}

/*
2. `await` keyword:
- The `await` keyword is used within an `async` function to pause its execution until a Promise is settled (either resolved or rejected).
- It is used to wait for the result of an asynchronous operation, such as fetching data from an API or reading a file.
- You can only use `await` inside an `async` function.
*/
// Example of using `await` to wait for a Promise to resolve:
// Javascript
async function fetchData() {
const response = await fetch('https://example.com/api/data');
const data = await response.json();
// Code here resumes execution only after the data is available
}

/*
The main reasons for using `async` and `await` are:

1. Improved Readability: Asynchronous code written with `async` and `await` is often more readable and easier to understand compared to using callbacks or Promises with `.then()`.

2. Sequential Code Flow: `await` allows you to write asynchronous code that resembles synchronous code in terms of flow. This makes it easier to reason about the order of operations in your code.

3. Error Handling: You can use `try...catch` blocks to handle errors in a more straightforward manner when using `async` and `await`.

4. Simplified Promise Handling: `async` and `await` simplify working with Promises, making it easier to handle complex chains of asynchronous operations.
*/
// Here's a basic example to illustrate the benefits of `async` and `await`:

// Javascript
async function fetchData() {
try {
    const response = await fetch('https://example.com/api/data');
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
}

// In this example, the code reads like a series of synchronous operations, making it easier to follow and handle potential errors.