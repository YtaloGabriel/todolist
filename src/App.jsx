import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalStorage>
        <Header />
        <Tasks />
      </GlobalStorage>
    </div>
  );
}

export default App;
