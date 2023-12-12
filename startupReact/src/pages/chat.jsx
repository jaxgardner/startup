import React from 'react';
import '../index.css'
import { useState, useEffect } from 'react';

const SentMessage = ({message}) => {
    return (
        <div className='sent-message'>{message}</div>
    )
}

const ReceivedMessage = ({message}) => {
    return (
        <div className='received-message'>{message}</div>
    )
}


function Chat() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState(null);

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    useEffect(() => {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        const newSocket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        setSocket(newSocket);
    
        newSocket.addEventListener('open', () => {
          console.log('Connected to WebSocket server');
        });
    
        newSocket.addEventListener('message', (event) => {
            console.log(event.data);
            receivedMessage(event.data)
        });
    
        newSocket.addEventListener('close', () => {
          console.log('Connection closed');
        });
    
        // Clean up WebSocket connection when the component unmounts
        return () => {
          newSocket.close();
        };
      }, []);


    const sendMessage = () => {
        const newMessage = <SentMessage  message={message}/>

        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        socket.send(message);
        setMessage('');
    }

    const receivedMessage = (text) => {
        const newMessage = <ReceivedMessage message={text} />;
        setMessages(prevMessages => [...prevMessages, newMessage]);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          // Handle Enter key press here
          sendMessage();
        }
      };
    
      
    return (
        <main id="main">
            <div className="maintitle">
                <h1>Learn what others are doing!</h1>
            </div>
    
            <div className="container">
                <div id="messages">
                {messages.map((component, index) => (
                    <React.Fragment key={index}>{component}</React.Fragment>
               ))}
                </div>    
                <div className="input-container" onKeyDown={handleKeyPress}>
                    <input id="inputMessage" type="text" name='message' placeholder="Type something..." value={message} onChange={handleChange}></input>
                    <button id="addInputMessage" type="button" onClick={sendMessage}>Send</button>
                </div>
            </div>
        </main>
    )
}

export default Chat;