import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const logout = () => {
    // Implement your logout logic here
  };

  return (
    <header>
      <div className="title">
        <h1>Bored</h1>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/saved">Saved</Link>
          </li>
        </ul>
      </div>
      <div className="user">
        <h2 id="userplace">Jaxon</h2>
        <button id="logout" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
};


export default Header;