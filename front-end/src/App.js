import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
