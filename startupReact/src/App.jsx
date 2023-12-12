import React from 'react';
import Header from './modules/header';
import Home from './pages/home';
import Chat from './pages/chat';
import Saved from './pages/saved';
import Login from './pages/login';
import CreateAccount from './pages/createAccount';
import Footer from './modules/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/chat' element={<Chat/>}/>
                <Route path='/saved' element={<Saved/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/createaccount' element={<CreateAccount/>}/>
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
