import './App.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ToTop from './components/ToTop';
import Header from './components/Header';
import BackgroundIMG from './components/BackgroundIMG';
import bgIMG from './img/bg/BG.jpg'

const lang = "en"

function App() {
  return (
    <div className="App">
      
      <Header lang={lang}/>
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
