import React from 'react';
import '../index.css'
import { useState } from 'react';

function Chat() {
    const [messages, updateMessages] = useState([]);

    return (
        <main id="main">
            <div className="maintitle">
                <h1>Learn what others are doing!</h1>
            </div>
    
            <div className="container">
                <div id="messages">
                </div>    
                <div className="input-container">
                    <input id="inputMessage" type="text" placeholder="Type something..."></input>
                    <button id="addInputMessage" type="button">Send</button>
                </div>
            </div>
        </main>
    )
}

export default Chat;