import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ToTop from './components/ToTop';

const lang = "en"

function App() {
  return (
    <div className="App">
      <header id='header' className="App-header">
        <h1>Mathias Larsen</h1>
        <p> MSc in Computer Science</p>
        <div >
          <ul className='Header-container'>
            <li className='Header-element'>
              <a className='App-link' href="#about">About me</a>    
            </li>
            <li className='Header-element'>
              <a className='App-link' href="#projects">Projects</a>    
            </li>
            <li className='Header-element'>
              <a className='App-link' href="#education">Education</a>    
            </li>
            <li className='Header-element'>
              <a className='App-link' href="#work">Work experience</a>   
            </li>
            <li className='Header-element'>
              <a className='App-link' href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <main className='App-main'>
        <ToTop/>
        <AboutMe lang={lang} />
        <Projects lang={lang} />
        <Education lang={lang} />
        <Work lang={lang} />
        <Contact lang={lang}/>
      </main>
      <footer className='App-footer'>
        <p>© 2024 Mathias M. A. Larsen. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
