// Function to load countries data from the specified API
const loadCountries = () => {
    // Using the fetch API to make a GET request to the Restcountries API
    fetch("https://restcountries.com/v3.1/all")
    // Handling the response by converting it to JSON
    .then(res => res.json())
    // Calling the displayCountries function with the retrieved data
    .then(data => displayCountries(data))
}

// Function to display countries on the webpage
const displayCountries = countries => {
    // Logging the countries data to the console for debugging purposes
    console.log(countries);
    
    // Mapping through the array of countries and creating HTML for each country using the getCountries function
    const allCountriesHTML = countries.map(country => getCountries(country));
    
    // Getting the container element by its ID ("countries")
    const container = document.getElementById("countries");
    
    // Setting the inner HTML of the container with the generated HTML for all countries
    container.innerHTML = allCountriesHTML.join("");
}

// Function to generate HTML for a single country
const getCountries = country => {
    // Creating HTML markup for a country with its common name and flag
    return `
        <div>
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}">
        </div>
    `;
}

// Calling the loadCountries function to initiate the loading and display of countries on the webpage
loadCountries();
