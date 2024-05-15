import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';

import Projects from './components/Projects/Projects';

function App() {


  return (
    <div>
      <Header />
      <main>
        <Projects />

      </main>
    </div>
  );
}

export default App;
