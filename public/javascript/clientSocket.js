const socket = new WebSocket('ws://localhost:4000');

// Event listener for connection
socket.addEventListener('open', (event) => {
    console.log('Connected to WebSocket server');

});

// Event listener for receiving messages
socket.addEventListener('message', (event) => {
    addRecievedMessage(event.data);
});

// Event listener for connection close
socket.addEventListener('close', (event) => {
    console.log('Connection closed');
});

const sendButton = document.getElementById("addInputMessage");
sendButton.addEventListener('click', () => {
    const text = document.getElementById('inputMessage').value;
        socket.send(text);

        const button = document.getElementById("inputMessage");
        button.value = '';
})

document.getElementById('inputMessage').addEventListener('keydown', function(event){
    
    if(event.key === 'Enter'){
        const text = document.getElementById('inputMessage').value;
        console.log(text);
        event.preventDefault();
        socket.send(text);

        const button = document.getElementById("inputMessage");
        button.value = '';
    }
})

function addRecievedMessage(text) {

    const newMessage = document.createElement('div');
    const parent = document.getElementById("messages");

    newMessage.className = 'received-message';
    newMessage.innerHTML = text;

    parent.appendChild(newMessage);

    parent.scrollTop = parent.scrollHeight;

}