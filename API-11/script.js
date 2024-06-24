const submitBtn = (event) => {
    event.preventDefault();
    const searchBar = document.getElementById('searchBar');
    const searchText = searchBar.value;
    const errorTag = document.getElementById('error');
    const ageTag  = document.getElementById("age");
    try {
        const search = parseInt(searchText);
        if (isNaN(search)) {
            throw "Please enter a number";
        }
        else if (search < 18) {
            throw "You are underage!";
        }
        errorTag.innerHTML = '';
        ageTag.innerHTML = `Your age is ${searchText}`
    } catch (error) {
        console.log('Error: ', error);
        errorTag.innerHTML = error;
    }
}
