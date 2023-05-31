import './App.css';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import GridLayout from './components/GridLayout';
import Footer from './components/Footer';
import { Container } from '@mui/system';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar 
        pageTitle="Makawo"
      />
      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
