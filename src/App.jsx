import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Logement from './pages/Logement';
import Propos from './pages/Propos';
import Header from './compoments/Header';
import Footer from './compoments/Footer';

function App(){
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Logement/:id" element={<Logement />} />
                <Route path="Propos" element={<Propos />} />
            </Routes>
            <Footer />
        </Router>
      );
}
  
export default App;