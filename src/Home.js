import React from 'react'
import logo from './images/logo.png';
import face from './images/hap.jfif';
import board from './images/board.png';
import bk1 from './images/bk1.png';
import bk2 from './images/bk2.png';
import bk3 from './images/bk3.png';


const Home = () => {
    return (
        <div>
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
          <p id='head' >Now in Bali</p>
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

      <div className='events' >
        <div className='each' >
          <img src={bk1} alt='city' />
          <div className='details'>
            <div>
              <p>booking closed</p>
            </div>
            
            <h5>Bali</h5>
            <p>January 9-22</p>
          </div>
          
        </div>
        <div className='each' >
          <img src={bk2} alt='city' />
          <div className='details'>
            <p>booking closed</p>
            <h5>Bali</h5>
            <p>January 9-22</p>
          </div>
        </div>
        <div className='each' >
          <img src={bk3} alt='city' />
          <div className='details'>
            <p>booking closed</p>
            <h5>Bali</h5>
            <p>January 9-22</p>
          </div>
        </div>
      </div>


      <img src={board} className='board' alt='surf board' />

        </div>
    )
}

export default Home;