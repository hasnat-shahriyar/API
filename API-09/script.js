const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => userApi(json))
    .catch(error => console.error('Error: ', error))
} 

const userApi = data => {
    const ul = document.getElementById('user-list');
    ul.innerHTML = '';
    for (const user of data) {
        const li = document.createElement('li');
        // li.innerText = user.name; // used for plain text
        li.innerHTML = `<h1>${user.name}</h1>`;
        ul.appendChild(li);
    }
}