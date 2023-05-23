import './App.css';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import GridLayout from './components/GridLayout';
import { Container } from '@mui/system';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <Container>
        <main>
          <GridLayout />
        </main>
      </Container>
    </div>
  );
}

export default App;
