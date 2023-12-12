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

function generateNumericId(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


function Chat() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState({message: ''});
    const [socket, setSocket] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMessage((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    useEffect(() => {
        const newSocket = new WebSocket('ws://localhost:4000');
        setSocket(newSocket);
    
        newSocket.addEventListener('open', () => {
          console.log('Connected to WebSocket server');
        });
    
        newSocket.addEventListener('message', (event) => {
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
        const newMessage = <SentMessage  message={message.message}/>

        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);

    }
    
      
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
                <div className="input-container">
                    <input id="inputMessage" type="text" name='message' placeholder="Type something..." value={message.message} onChange={handleChange}></input>
                    <button id="addInputMessage" type="button" onClick={sendMessage}>Send</button>
                </div>
            </div>
        </main>
    )
}

export default Chat;