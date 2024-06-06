import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';

import Projects from './components/Projects/Projects';

function App() {


  return (
    <div className='dark:bg-black bg-white'>
      <Header />
      <main className='dark:bg-neutral-800 dark:text-white bg-white' >
        <Projects />
      </main>
    </div>
  );
}

export default App;
