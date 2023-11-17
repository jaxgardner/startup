const form = document.getElementById('createAnAccount'); // Replace 'yourFormId' with the actual ID of your form
form.addEventListener('submit', createAccount);

async function createAccount(event){
    event.preventDefault();
    const response = await fetch('/auth/create', {
        method: "POST",
        body: JSON.stringify({
            username: event.target.username.value,
            password: event.target.password.value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if(response.ok){
        window.location.href = './index.html';
    } else {
        const errorData = await response.json(); 
        console.error("Error:", response.status, response.statusText, errorData);
    }
    
}