import React from 'react';
import '../index.css'
import { useState } from 'react';

function CreateAccount() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Access form data from the state variable formData
        console.log(formData);
        setFormData({
            username: '',
            password: '',
        })
        // Add your logic for handling form submission here
    };
    
    
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