import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header'; // Add this line to import Header
import Home from './pages/home_page';
import SignupForm from './pages/signup_page';
import SigninForm from './pages/signin_page';
import Add from './pages/add_page';
import Search from './pages/search_page';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const firstName = localStorage.getItem('firstName');
    if (firstName) {
      setUser({ firstName });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('firstName');
    setUser(null);
  };

  return (
    <Router> 
      <Header user={user} onLogout={handleLogout} />
      <Routes> 
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/add" element={<Add />} />
        <Route path="/search" element={<Search />} />
      </Routes> 
    </Router>
  );
}

export default App;
