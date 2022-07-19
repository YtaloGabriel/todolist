import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalStorage>
        <Header />
      </GlobalStorage>
    </div>
  );
}

export default App;
