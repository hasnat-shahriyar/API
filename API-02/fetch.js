// This is the first way to fetch data. It initiates a GET request to the specified URL.
fetch('https://jsonplaceholder.typicode.com/todos/1')
  // Once the request is complete, this .then() block processes the response by parsing it as JSON.
  .then(response => response.json())
  // After parsing the JSON, this .then() block logs the JSON data to the console.
  .then(json => console.log(json))

// Define a URL as a string for easier reuse.
const url = "https://jsonplaceholder.typicode.com/todos/1";

// This is the second way to fetch data. It uses the previously defined URL.
fetch(url)
  .then(response => response.json())
  .then(json => console.log(json))

// Define a function named 'loadData' for further reusability.
function loadData(){
  // Fetch data using the 'url' variable.
  fetch(url)
    .then(response => response.json())
    // Log the JSON data to the console.
    .then(json => console.log(json))
}

// You can call the 'loadData' function later to fetch and display the data.
