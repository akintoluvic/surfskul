import React from 'react';
import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='as' >
        <a href='/'>
          <img src={logo} alt='logo' />
        </a>
        <nav>
          <a href='/'>About</a>
          <a href='/'>Teachers</a>
          <a href='/'>Price</a>
          <a href='/'>Schedule</a>
          <a href='/'>Contacts</a>
        </nav>
      </header>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
