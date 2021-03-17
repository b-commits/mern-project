import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import User from './components/User';
import Admin from './components/Admin';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Login} />
      <Route path="/about" component={About} />
      <Route path="/home" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/admin" component={Admin} />
    </Router>
  );
}

export default App;
