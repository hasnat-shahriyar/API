// This function fetches data from the specified API and calls displayPost() with the retrieved data.
function loadPosts() {
    // Use the fetch() function to make an HTTP GET request to the API.
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json()) // Parse the response as JSON
        .then(data => displayPost(data)); // Call the displayPost function with the JSON data
}

// This function is responsible for displaying the fetched posts on the web page.
function displayPost(posts) {
    // Get the container element where you want to add the new post elements.
    const postsContainer = document.getElementById("post-container");

    // Loop through the array of post objects received from the API.
    for (const post of posts) {
        // Create a new div element for each post.
        const div = document.createElement("div");

        // Set the innerHTML of the div to display the post details.
        div.innerHTML = `
            <h4>User : ${post.userId}</h4>
            <h5>Title : ${post.title}</h5>
            <p>ID : ${post.id}</p>
            <p>Post Description : ${post.body}</p>
        `;

        // Append the newly created div to the posts container, adding it to the web page.
        postsContainer.appendChild(div);
    }
}

// Call the loadPosts function to initiate the data fetching and display process.
loadPosts();
