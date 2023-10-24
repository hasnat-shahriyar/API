// This function fetches a list of users from the API and then calls the displayData function to show them on the page.
function loadData() {
    // Fetch the list of users from the JSONPlaceholder API.
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json()) // Parse the response as JSON.
        .then(data => displayData(data)); // Call the displayData function with the JSON data.
}

// This function takes an array of user objects and displays their names in an unordered list on the web page.
function displayData(users) {
    // Get the <ul> element with the id "users-list" from the HTML.
    const ul = document.getElementById("users-list");

    // Loop through the user data and create list items for each user's name.
    for (const user of users) {
        console.log(user.name); // Log the user's name to the console (optional).
        
        // Create a new <li> element to hold the user's name.
        const li = document.createElement("li");
        li.innerText = user.name; // Set the text of the <li> to the user's name.

        // Append the <li> element to the <ul> element to display it on the web page.
        ul.appendChild(li);
    }
}
