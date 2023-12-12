import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ( { onLogout }) => {
  const [userName, changeUsername] = useState('');
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await fetch(`/api/auth/logout`, {
        method: 'DELETE',
        credentials: 'include'
      });
      navigate('/login');
      changeUsername('');
      onLogout({isLoggedIn: false});
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  useEffect(() => {
    async function getUserName() {
      try {
        const response = await fetch(`/api/user/me`, {
          method: 'GET',
          credentials: 'include'
        });
        const text = await response.json();
        changeUsername(text.username);
      } catch (error) {
        console.error('Error: ', error);
      }
    }

    getUserName();
  }, [])

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
        <h2 id="userplace">{userName}</h2>
        <button id="logout" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
};


export default Header;