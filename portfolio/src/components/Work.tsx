import React from 'react';

interface WorkProps {
  lang: string;
}

const Work: React.FC<WorkProps> = ({ lang }) => {
  if (lang==="en"){
    return (
    <div className='Work'>
      <h1 id='work' className='Title'>Work experience</h1>
      <ul>
        <li>
            <h3>Karla</h3>
            <div>As a software developer at the start-up Karla, my Specific tasks and responsibilities are vaguely defined. My role encapsules doing any digital work within the organization. This covers, but is not limited to:
                <ul>
                    <li>
                    Improving or extending the backend. 
                    </li>
                    <li>
                    Overviewing the stability of the database, and server. 
                    </li>
                    <li>
                    Developing client specific products
                    </li>
                    <li>
                    Advising and reflecting on design decisions with the CTO.
                    </li>
                </ul>
            </div>
        </li>
        <li>
            <h3>Research assistant</h3>
            <div>During my time as a research assistant in the project "Energy-efficiency of software and hardware
              algorithms", my main responsabilities were to take measurements of the different algorithms and advicate which parameters might be interesting to look into further. 

              During the project a range of algorithms were tested for both in software and hardware, where the prior was measured on a raspberry pi (programmed in C) and the latter was measured on a Field-programmable Gate Array (FPGA) (programmed in Chisel). 

              My work in the project was hybrid, where the measurements were taken on site at Roskilde University, and the findings were reported back to the researchers through online mediums such as github (https://github.com/FPGA-Energy) and slack.
            </div>
        </li>
        <li>
            <h3>Teaching assistant</h3>
            <div>
            As a teachings assistant of the first basis course in empirical data, my responsibilities were to help and guide roughly 40 students through the assignments given to them by the lecture of the course. 

            The course consisted of the investigation of data and how to display data by the usage of python 3.8 as a tool. Here the libraries used were Numpy, Matplotlib, and pandas through the environment Jupiter notebook. 

            For more information on the course, go to: <a href="https://study.ruc.dk/class/view/24107">https://study.ruc.dk/class/view/24107</a>
            </div>
        </li>
      </ul>
    </div>
  );
    }
  else{
    return (
    <div className='Work'>
      <h1 id='work' className='Title'>Arbejds erfaringer</h1>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>);
  }
};

export default Work;