import React from 'react';
import meIMG from '../img/aboutMe.jpg'
import bgIMG from '../img/AboutMeBG.jpg'
interface AboutMeProps {
  lang: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ lang }) => {
  if (lang==="en"){
    return (
    <div id='about' className='AboutMe'>
      <div className='AboutMe-bg-img'>
        <img src={meIMG} alt="" />
      </div>
      <div className='AboutMe-child'>
        <div className='shadowed-div'>
          <div className='Flex-row'>
            <img className="AboutMe-img" src={meIMG} alt="" />
            <div className='AboutMe-content'>
              <p className='AboutMe-item'>
              <h1  className='Title'>About Me</h1>
              I am a Master's (MSc) student at the IT University in Copenhagen, where I  am studying Computer Science. Here, I plan to specialize in Information  Security, as the ongoing battle between IT defense and attacks  fascinates me. Before my Master's, I was a student at Roskilde  University, where I pursued a Bachelor's (BSc) degree in Computer  Science and Informatics. Throughout my education, I have strived to  exceed my goals by taking on as much responsibility as possible. I have  worked as a teaching assistant and research assistant, which has opened  up opportunities such as a work/study trip to Croatia, where I  participated in a summer school for Ph.D. students in resource  management in computer science. I am very accustomed to group work, as  it is the primary work format at RUC, and I can quickly adapt to various  group dynamics and work structures.
              </p>
            </div>
          </div>
        </div>
      </div>
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

export default AboutMe;