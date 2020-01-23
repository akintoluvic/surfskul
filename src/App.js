import React from 'react';
import logo from './images/logo.png';
import face from './images/hap.jfif';
import board from './images/board.png';
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
      <main>
        <div id='title'>
          <h1>SURF <br></br>LESSONS</h1>
          <p>Catch your first wave now</p>
        </div>
        <div id='description'>
          <h3>Now in Bali</h3>
          <p>January 9-22</p>
        </div>
      </main>
      <div className='surfer'>
        <img src={face} alt='customer face' width='90' height='90' />
        <div className='desc'>
          <h5>Juli Star, 26y.o</h5>
          <p>“it was the best 3 hours of my life! So many emotions and 
my first wave”</p>
        </div>
      </div>

      <img src={board} className='board' alt='surf board' />


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
