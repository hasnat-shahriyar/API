// Define an asynchronous function named loadPhone
const loadPhone = async (searchText) => {
    // Create a URL by interpolating a search query for "iphone" into the API endpoint
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    // Send a GET request to the specified URL and wait for the response
    const res = await fetch(url);

    // Convert the response data into a JavaScript object and wait for it to be resolved
    const data = await res.json();

    // Log the resulting data to the console
    displayPhones(data.data);
}

// Define a function to display a phone name
const displayPhones = phones => {
    const phoneContainer = document.getElementById("card-container");
    
    // Clear previous content in the card container
    phoneContainer.innerHTML = "";

    // Display only the first 6 Phones
    phones = phones.slice(0, 6);

    // Get the "No Phones Found" message element
    const noPhone = document.getElementById("no-found-msg");

    // If there are no phones in the result, display the message; otherwise, hide it
    // Check if there are no phones found in the search results
    if (phones.length === 0) {
        // If no phones are found, remove the "d-none" class to make the message visible
        noPhone.classList.remove("d-none");
    } else {
        // If there are phones found, add the "d-none" class to hide the message
        noPhone.classList.add("d-none");
    }
    // The code checks if there are no phones found in the search results by examining the phones array's length.
    // If no phones are found (i.e., phones.length is 0), it removes the "d-none" class from the "no-found-msg" element, making the "No Phones Found" message visible.
    // If there are phones found (i.e., phones.length is not 0), it adds the "d-none" class to hide the "No Phones Found" message to indicate that there are search results to display.

    // Loop through the phone data and create HTML elements for each phone
    phones.forEach(phone => {
        const phoneDiv = document.createElement("div");
        phoneDiv.classList.add("col");
        phoneDiv.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="${phone.phone_name}">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.description}</p>
            </div>
        </div>
    `;

    // Append the phone card to the phone container
    phoneContainer.appendChild(phoneDiv);
    });

    // Stop the Spinner
    toggleSpinner(false);
}

// Add an event listener to the "search" button
document.getElementById("search-btn").addEventListener("click", function(){
    // Start the Spinner
    toggleSpinner(true);

    // Get the user's input from the search field
    const searchField = document.getElementById("exampleInputEmail1");
    const searchText = searchField.value;

    // Call the loadPhone function with the user's search query
    loadPhone(searchText);
});

// Function to toggle the visibility of a loading spinner
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById("spinner");
    if (isLoading){
        loaderSection.classList.remove("d-none");
    } else{
        loaderSection.classList.add("d-none");
    }
}

// Call the loadPhone function without any initial search query to load some data
loadPhone();



// const loadPhone = async() => { ... }: This defines an asynchronous function named loadPhone. The async keyword indicates that this function will contain asynchronous operations.

// const url = https://openapi.programming-hero.com/api/phones?search=iphone``: This line constructs a URL for an API request, including a search parameter for "iphone." It uses template literals to interpolate the search query into the URL.

// const res = await fetch(url);: This line sends an HTTP GET request to the URL defined above using the fetch function. The await keyword is used to pause the execution of the function until the request is complete and a response is received.

// const data = await res.json();: Once the response is received, this line extracts the JSON data from the response using the json method. Again, the await keyword is used to wait for this operation to complete.

// console.log(data);: Finally, this line logs the retrieved JSON data to the console, making it visible for debugging or further processing.

// loadPhone();: This line calls the loadPhone function, which initiates the API request and data retrieval process. The function's execution begins when it's called.