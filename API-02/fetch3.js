function loadData3(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then (res => res.json())
    .then (data => displayData(data))
}

function displayData(users){
    for (const user of users){
        console.log (user.name);
    }
}