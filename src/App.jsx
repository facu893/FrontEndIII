import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import DentistDetail from './Routes/Detail';
import Favorites from './Routes/Favs';

function App() {
  return (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<DentistDetail />} />
            <Route path="/favs" element={<Favorites />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
  );
}

export default App;
