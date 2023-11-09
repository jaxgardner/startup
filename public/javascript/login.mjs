

function login(form){
    const username = form.username.value;

    fetch(`http://localhost:4000/login/${username}`, {
        method: "POST"
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    })
    .catch((error) => {
        console.error('Fetch error:', error);
      });

    // localStorage.setItem("username", username);
    // console.log(localStorage.getItem("username"));
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