document.addEventListener("DOMContentLoaded", function() {
    // Select the div element
    const user = document.getElementById("userplace");

    fetch("http://localhost:4000/user/username", {
        method: "GET"
    })
    .then((response) => {
        if(!response.ok){
            throw new Error("Network not working")
        }
        return response.json();
    })
    .then((data) => {
        user.textContent = data.user;
    })
    .catch((error) => {
        console.error('Fetch error:', error);
      });
})

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
    const text = document.getElementById('inputMessage').value;

    const newMessage = document.createElement('div');
    const parent = document.getElementById("messages");

    newMessage.id = 'message';
    newMessage.innerHTML = text;

    parent.appendChild(newMessage);

    const button = document.getElementById("inputMessage");
    button.value = '';
}
    

