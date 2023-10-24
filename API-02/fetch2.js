function loadData2(){
  // Fetch data using the 'url' variable.
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    // Log the JSON data to the console.
    .then(data => displayUsers(data))
}

function displayUsers(data){
    console.log(data);
}