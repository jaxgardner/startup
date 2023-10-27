document.addEventListener("DOMContentLoaded", function() {
    // Select the div element
    const user = document.getElementById("userplace");

    // Change the text of the div element immediately
    user.textContent = localStorage.getItem("username");
});

document.getElementById("addInputMessage").addEventListener('click', function(event){
    event.preventDefault;
    const text = document.getElementById('inputMessage').value;

    const newMessage = document.createElement('div');
    const parent = document.getElementById("messages");

    newMessage.id = 'message';
    newMessage.innerHTML = text;

    parent.appendChild(newMessage);

    const button = document.getElementById("inputMessage");
    button.value = '';
})

