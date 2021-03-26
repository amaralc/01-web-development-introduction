const form = document.getElementById('sendUsernameForm')

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const usernameParagraph = document.getElementById('pUsername');
    const repositoriesList = document.getElementById('repositoriesList');
    


    let repositories;
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            repositories = data
        }).then(() => {

            repositories.forEach((repository, index) => {
                let listItem = document.createElement("LI");
                listItem.innerHTML = repository.name
                repositoriesList.appendChild(listItem);
            })
            console.log(repositories)
        });                
})