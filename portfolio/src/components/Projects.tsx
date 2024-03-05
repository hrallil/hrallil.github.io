import React from 'react';

import boltIMG from '../img/bolt.jpg'
import cubeIMG from '../img/rubix-cube.png'
import slashIMG from '../img/slash.png'


interface ProjectsProps {
  lang: string;
}

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  if (lang==="en"){
    return (
    <div id='projects' className='Projects'>
      <h1 className='Title'>Projects</h1>
      <ul className='Projects-list'>
        <li id='slash' className='Project-item'>
            <img className='Project-img' src={slashIMG} alt="Slash img"/>
            <div className='Project-download'>
              <a href="https://hrallil.itch.io/slash">Link to slash download </a>
              <a href="{slashPDF}" download >Download report here</a> {/* shit doesnt work, cant find the file*/}
            </div>
            <div className='Project-content'>This project is created with the purpose of understanding the game engine 'unity' and the process of creating a game. As a produt a game, SLASH, has been created. This game follows the genre styles of rogue-like. In this game, a randomly generated dungeon will allow the player to treverse and find two keys to pass through the end-gate. This player needs to avoid enemies, spikes and other posible obstacles on his way. The enemies hunt the player with the help of an implementation of Dijkstra's algorithm, allowing the enemies to pathfind around obstacles.</div>
        </li>
        <li id='cube' className='Project-item'>
            <img className='Project-img' src={cubeIMG} alt="cube img"/>
            <div  className='Project-download'>
              <a href="{cubePDF}" download>Download report here</a> {/* shit doesnt work, cant find the file*/}
            </div>
            <div className='Project-content'>In this project a problem of solving a rubik's cube is presented. Here multiple algorithms can be used to solve it. The algorithm considered brute-force, depth first search, is here compared to two A* algorithms, with two different heuristics. The two heuristics are also compared to eachother to see how different heuristics can affect runtime.</div>
        </li>
        <li id='energy' className='Project-item'>
            <img className='Project-img' src={boltIMG} alt="energy img"/>
            <div  className='Project-download'>
              <a href="{energyPDF}" download className='Project-download'>Download report here</a> {/* shit doesnt work, cant find the file*/}
            </div>
            <div className='Project-content'>In this poster abstract we will report on a case
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
    <div className='Projects'> 
      <h1 id='projects' className='Title'>Projekter</h1>
      <p>hej mit navn er mathias</p>
    </div>);
  }
};

export default Projects;