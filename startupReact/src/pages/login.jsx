import React from 'react';
import '../index.css'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Login({ onLogin }) {
    const [quote, updateQuote] = useState('-Today is a great day');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        const url = "https://api.quotable.io/random";

        fetch(url)
        .then((data) => data.json())
        .then((response) => {
            const textContent = JSON.stringify("-" + response.content);
            updateQuote(textContent);
            
        })
    }, [])
    
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
          const response = await fetch('/api/auth/login', {
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
          console.log(response);
          // Handle successful response
          onLogin({ loggedIn: true});
          navigate('/');
        } catch (error) {
          console.error('Error:', error.message);
          alert('An error occurred during login');
        }
      }
      
 
    
    return (
        <main id="main">
            <div className="logintitle">
                <h1>Login here</h1>
            </div>
            <div className="login">
                <form id="loginForm" onSubmit={handleSubmit}>
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
            <div>
                Don't have an account?
                <Link to="/createaccount">Create one here</Link>
            </div>
            <div className="quote">{quote}</div>
        </main>
    )
}

export default Login;