// Define an asynchronous function named loadPhone
const loadPhone = async () => {
    // Create a URL by interpolating a search query for "iphone" into the API endpoint
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;

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
    phoneContainer.innerHTML = ""; // Clear previous content

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
    phoneContainer.appendChild(phoneDiv);
});
}










// Call the loadPhone function, initiating the API request and data retrieval
loadPhone();

// const loadPhone = async() => { ... }: This defines an asynchronous function named loadPhone. The async keyword indicates that this function will contain asynchronous operations.

// const url = https://openapi.programming-hero.com/api/phones?search=iphone``: This line constructs a URL for an API request, including a search parameter for "iphone." It uses template literals to interpolate the search query into the URL.

// const res = await fetch(url);: This line sends an HTTP GET request to the URL defined above using the fetch function. The await keyword is used to pause the execution of the function until the request is complete and a response is received.

// const data = await res.json();: Once the response is received, this line extracts the JSON data from the response using the json method. Again, the await keyword is used to wait for this operation to complete.

// console.log(data);: Finally, this line logs the retrieved JSON data to the console, making it visible for debugging or further processing.

// loadPhone();: This line calls the loadPhone function, which initiates the API request and data retrieval process. The function's execution begins when it's called.