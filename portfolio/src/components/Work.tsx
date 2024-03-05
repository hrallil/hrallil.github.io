// MyFunctionalComponent.tsx
import { directive } from '@babel/types';
import React from 'react';

interface WorkProps {
  lang: string;
}

const Work: React.FC<WorkProps> = ({ lang }) => {
  if (lang=="en"){
    return (
    <div className='work'>
      <h1 id='work' className='title'>Work experience</h1>
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
            <div>Sometext describing how i worked for karla</div>
        </li>
        <li>
            <h3>Teaching assistant</h3>
            <div>Sometext describing how i worked for karla</div>
        </li>
      </ul>
    </div>
  );
    }
  else{
    return (
    <div className='work'>
      <h1 id='work' className='title'>Arbejds erfaringer</h1>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>);
  }
};

export default Work;