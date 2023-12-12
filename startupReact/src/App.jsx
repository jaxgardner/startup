import React from 'react';
import { useState, } from 'react';
import Header from './modules/header';
import HeaderLogin from './modules/headerlogin';
import Home from './pages/home';
import Chat from './pages/chat';
import Saved from './pages/saved';
import Login from './pages/login';
import CreateAccount from './pages/createAccount';
import Footer from './modules/footer';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import './App.css'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = ({loggedIn}) => {
        setIsLoggedIn(loggedIn);
    }

    const ProtectedRoute = ({ element }) => {
        return isLoggedIn ? element : <Navigate to="/login" />;
    };

    return (
        <Router>
            {isLoggedIn ? (
                <Header onLogout={handleLogin}/>
            ) : (
                <HeaderLogin />
            )}
           <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/createaccount" element={<CreateAccount onLogin={handleLogin}/>} />
                {/* Use the ProtectedRoute component for protected routes */}
                <Route path="/chat" element={<ProtectedRoute element={<Chat />} />} />
                <Route path="/saved" element={<ProtectedRoute element={<Saved />} />} />
            </Routes>
          <Footer />
        </Router>
      );
    }


export default App
