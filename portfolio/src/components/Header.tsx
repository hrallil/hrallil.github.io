import React from 'react';
import meIMG from '../img/aboutMe.jpg'
import bgIMG from '../img/bg/BG.jpg'
import BackgroundIMG from './BackgroundIMG';
interface HeaderProp {
  lang: string;
}

const Header: React.FC<HeaderProp> = ({ lang }) => {
  if (lang==="en"){
    return (
        <div>
            <BackgroundIMG img={bgIMG} />
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
      </div>
  );
    }
  else{
    return (
    <div className='AboutMe'>
      <h1 id='about' className='Title'>Om mig</h1>
      <p>
        Jeg er en kandidatstuderende (MSc) på IT Universitetet i København, hvor jeg studerer datalogi. Her planlægger jeg at specialisere mig inden for informationssikkerhed, da den vedvarende kamp mellem IT-forsvar og angreb fascinerer mig. Før min kandidatuddannelse var jeg studerende på Roskilde Universitet, hvor jeg fulgte en bacheloruddannelse (BSc) i datalogi og informatik. Gennem hele min uddannelse har jeg stræbt efter at overgå mine mål ved at påtage mig så meget ansvar som muligt. Jeg har arbejdet som undervisningsassistent og forskningsassistent, hvilket har åbnet døre for muligheder som en arbejds-/studietur til Kroatien, hvor jeg deltog i en sommerskole for ph.d.-studerende inden for ressourcestyring i datalogi. Jeg er meget vant til gruppearbejde, da det er den primære arbejdsform på RUC, og jeg kan hurtigt tilpasse mig forskellige gruppedynamikker og arbejdsstrukturer.
      </p>
    </div>);
  }
};

export default Header;