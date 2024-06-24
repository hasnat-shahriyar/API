const loadUser = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok){
            throw new Error('Network response was not ok - ' + response.status)
        };
        const users = await response.json();
        displayUsers(users)
    } 
    catch (error) {
        console.log('There has been a problem with your fetch operation:', error);
    }
}

const displayUsers = users => {
    const ul = document.getElementById('user-list');
    ul.innerHTML = '';
    for (const user of users) {
        const li = document.createElement('li');
        li.innerHTML = `<p>${user.name}</p>`;
        ul.appendChild(li);
    }
}