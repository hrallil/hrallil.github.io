// MyFunctionalComponent.tsx
import { directive } from '@babel/types';
import React from 'react';
import ProjectsHeader from './ProjectsHeader';

// import energyPDF from '../pdf/HW_SW_energy';
// import slashPDF from '../pdf/slash_report'
// import cubePDF from '../pdf/Cube_report'

import boltIMG from '../img/bolt.jpg'
import cubeIMG from '../img/rubix-cube.png'
import slashIMG from '../img/slash.png'


interface ProjectsProps {
  lang: string;
}

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  if (lang=="en"){
    return (
    <div className='projects'>
      <h1 id='projects' className='title'>Projects</h1>
      <ProjectsHeader lang={lang}/>
      <ul>
        <li id='slash'>
            <img className='Project-img' src={slashIMG} alt="Slash img"/>
            <a href="https://hrallil.itch.io/slash">Link to slash download </a>
            <a href="{slashPDF}" download>Download report here</a> {/* shit doesnt work, cant find the file*/}
            <div>This project is created with the purpose of understanding the game engine 'unity' and the process of creating a game. As a produt a game, SLASH, has been created. This game follows the genre styles of rogue-like. In this game, a randomly generated dungeon will allow the player to treverse and find two keys to pass through the end-gate. This player needs to avoid enemies, spikes and other posible obstacles on his way. The enemies hunt the player with the help of an implementation of Dijkstra's algorithm, allowing the enemies to pathfind around obstacles.</div>
        </li>
        <li id='cube'>
            <img className='Project-img' src={cubeIMG} alt="cube img"/>
            <a href="{cubePDF}" download>Download report here</a> {/* shit doesnt work, cant find the file*/}
            <div>In this project a problem of solving a rubik's cube is presented. Here multiple algorithms can be used to solve it. The algorithm considered brute-force, depth first search, is here compared to two A* algorithms, with two different heuristics. The two heuristics are also compared to eachother to see how different heuristics can affect runtime.</div>
        </li>
        <li id='energy'>
            <img className='Project-img' src={boltIMG} alt="energy img"/>
            <a href="{energyPDF}" download>Download report here</a> {/* shit doesnt work, cant find the file*/}
            <div>In this poster abstract we will report on a case
                study on implementing the Heapsort algorithm in hardware and
                software and comparing their time and energy consumption. Our
                experiment shows that the Hardware implementation is more
                energy efficient, but slower than the Software implementation due
                to a low clock frequency. It also indicate that the optimal degree
                of parallelization differs when optimizing for time compared to
                optimizing for time
            </div>
        </li>
      </ul>
    </div>
  );
    }
  else{
    return (
    <div className='projects'> 
      <h1 id='projects' className='title'>Projekter</h1>
      <p>hej mit navn er mathias</p>
    </div>);
  }
};

export default Projects;