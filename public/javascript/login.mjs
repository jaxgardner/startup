const form = document.getElementById('loginForm'); // Replace 'yourFormId' with the actual ID of your form
form.addEventListener('submit', login);

async function login(event){
    event.preventDefault();

    const response = await fetch('/auth/login', {
        method: "POST",
        body: JSON.stringify({
            username: event.target.username.value,
            password: event.target.password.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => {
        if(response.ok){
            window.location.href = './index.html';
        } 
        else {
            alert("Incorrect username or password");
        }
    })
    
}

document.addEventListener('DOMContentLoaded', function() {
    const url = "https://api.quotable.io/random";

    fetch(url)
        .then((data) => data.json())
        .then((response) => {
            document.querySelector('.quote').textContent = JSON.stringify(
                "-" + response.content,
                null,
                "-Today is a great day to do something"    
            )
        })
})