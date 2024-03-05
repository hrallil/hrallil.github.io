// MyFunctionalComponent.tsx
import { directive } from '@babel/types';
import React from 'react';

interface EducationProps {
  lang: string;
}

const Education: React.FC<EducationProps> = ({ lang }) => {
  if (lang=="en"){
    return (
    <div className='educations'>
      <h1 id='education' className='Title'>Formal education</h1>
      <ul>
        <li>
            <h3>
                BSc computer science and informatics
            </h3>
            <div>
            As a student at Roskilde University, it's a natural trait to work in project-oriented settings and engage in group work. Throughout my time at RUC, I have been involved in several projects where programming has always been a focal point. The mentioned projects that I have undertaken include:
                <ul>
                    <li>
                    Implementation of IDA* (2nd semester)
                    </li>
                    <li>
                    Exploring "computability" (3rd semester)
                    </li>
                    <li>
                    Game development (4th semester)
                    </li>
                    <li>
                    Utilization of MUST analysis (5th semester)
                    </li>
                    <li>
                    Bachelor's project analyzing energy consumption in software (6th semester)
                    </li>

                </ul>
                During each of these courses, I have practiced my skills as an independent worker since there is no set schedule for one's own projects. Additionally, I have honed my abilities to work with and organize groups of up to 6 individuals.
            </div>
        </li>
        <li>
            <h3>
                MSc Computer science specialized in information security
            </h3>
            <div>
                As a Master student at ITU, the focus of my development shifted to be far more theory oriented. This is where i will specialize in information security, but also extend my theoretical knowledge of computer science. 
                <h4>Courses:</h4>
                <ul>
                    <li> 
                    - Practical concurrency and parallel programming 
                    </li>
                    <li> 
                    - Advanced programming
                    </li>
                    <li> 
                    - Algorithm design
                    </li>
                    <li> 
                    - Introduction to Machine Learning
                    </li>
                    <li> 
                    - Cryptography
                    </li>
                    <li> 
                    - Software Architecture
                    </li>
                    <li> 
                    - Ethical hacking
                    </li>
                    <li> 
                    - DevOps - Evolution and Software Maintenance
                    </li>
                </ul>
            </div>
        </li>
      </ul>
    </div>
  );
    }
  else{
    return (
    <div className='Educations'>
      <h1 id='education' className='Title'>Udannelse</h1>
      <p>hej mit navn er mathias</p>
    </div>);
  }
};

export default Education;