document.addEventListener("DOMContentLoaded", function() {
    // Select the div element
    const user = document.getElementById("userplace");

    // Change the text of the div element immediately
    user.textContent = localStorage.getItem("username");
});

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
    

