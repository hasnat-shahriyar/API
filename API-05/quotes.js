// Define a function called loadQuote that fetches a random Kanye West quote from the API.
const loadQuote = () => {
    // Use the fetch() function to make an HTTP GET request to the API.
    fetch("https://api.kanye.rest/")
    .then(response => response.json()) // Parse the response as JSON
    .then(data => displayQuote(data)); // Call the displayQuote function with the JSON data
}

// Define a function called displayQuote to display the fetched quote on the web page.
const displayQuote = quote => {
    // Get the HTML element with the id "quote" where you want to display the quote.
    const blockQuote = document.getElementById("quote");
    
    // Set the innerHTML of the blockQuote element to display the fetched quote.
    blockQuote.innerHTML = quote.quote;
}

// Call the loadQuote function to initiate the process of fetching and displaying the quote.
loadQuote();
