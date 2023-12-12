import React from 'react';
import '../index.css'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';


function CreateAccount({ onLogin }) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    async function handleSubmit(event) {
        event.preventDefault();
      
        try {
          const response = await fetch('/api/auth/create', {
            method: 'POST',
            body: JSON.stringify({
              username: formData.username,
              password: formData.password,
            }),
            credentials: 'include',
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
      
      
          if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorMessage}`);
          }
          // Handle successful response
          onLogin({ loggedIn: true});
          navigate('/');
        } catch (error) {
          console.error('Error:', error.message);
          alert('An error occurred during creation');
        }
      }
    
    
    return (
        <main id="main">
            <div className="logintitle">
                <h1>Create an account here</h1>
            </div>
            <div className="login">
                <form id="createAnAccount" onSubmit={handleSubmit}>
                    <div className="textinput">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username..."
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password..."
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <input type="submit" value="Create Account" />
                    </div>
                </form>
            </div>
        </main>
    )
}

export default CreateAccount;