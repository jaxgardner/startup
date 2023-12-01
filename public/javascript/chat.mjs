

document.addEventListener("DOMContentLoaded", async function() {
    // Select the div element
    const user = document.getElementById("userplace");

    fetch("/user/me", {
        method: "GET"
    })
    .then((response) => {
        if(response.status === 401){
            window.location.href = '/login.html';
        }
        return response.json();
    })
    .then((data) => {
        user.textContent = data.username;
    })
    .catch((error) => {
        console.log(error);
      });
});

function logout() {
    fetch(`/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/login.html'));
  }

document.getElementById("addInputMessage").addEventListener('click', function(event){
    event.preventDefault;

    addMessage();
})

document.getElementById('inputMessage').addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        addMessage();
    }
})
    
function addMessage() {
    const user = document.getElementById("userplace").textContent;
    console.log(user);

    const text = document.getElementById('inputMessage').value;

    const newMessage = document.createElement('div');
    const parent = document.getElementById("messages");

    newMessage.className = 'sent-message';
    newMessage.innerHTML = text;

    parent.appendChild(newMessage);

    parent.scrollTop = parent.scrollHeight;

}
    
