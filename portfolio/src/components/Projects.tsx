import React from 'react';
import ProjectItem from './ProjectItem';

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
        <ProjectItem lang="en" imgURL={slashIMG} projectID='slash' content="This project is created with the purpose of understanding the game engine 'unity' 
                                                                            and the process of creating a game. As a produt a game, SLASH, has been created. 
                                                                            This game follows the genre styles of rogue-like. In this game, 
                                                                            a randomly generated dungeon will allow the player to treverse and find two keys to pass through the end-gate. 
                                                                            This player needs to avoid enemies, spikes and other posible obstacles on his way. 
                                                                            The enemies hunt the player with the help of an implementation of Dijkstra's algorithm, 
                                                                            allowing the enemies to pathfind around obstacles."/>
        <ProjectItem lang="en" imgURL={cubeIMG} projectID='cube' content="In this project a problem of solving a rubik's cube is presented. 
                                                                            Here multiple algorithms can be used to solve it. The algorithm considered brute-force, 
                                                                            depth first search, is here compared to two A* algorithms, with two different heuristics. 
                                                                            The two heuristics are also compared to eachother to see how different heuristics can affect runtime."/>
        <ProjectItem lang="en" imgURL={boltIMG} projectID='energy' content="In this poster abstract we will report on a case
                                                                            study on implementing the Heapsort algorithm in hardware and
                                                                            software and comparing their time and energy consumption. Our
                                                                            experiment shows that the Hardware implementation is more
                                                                            energy efficient, but slower than the Software implementation due
                                                                            to a low clock frequency. It also indicate that the optimal degree
                                                                            of parallelization differs when optimizing for time compared to
                                                                            optimizing for time"/>
      </ul>
    </div>
  );
    }
  else{
    return (
      <div id='projects' className='Projects'>
      <h1 className='Title'>Projects</h1>
      <ul className='Projects-list'>
        <ProjectItem lang="dk" imgURL={slashIMG} projectID='slash' content="Noget på dansk om slash"/>
        <ProjectItem lang="dk" imgURL={cubeIMG} projectID='cube' content="Noget på dansk om cube projectet"/>
        <ProjectItem lang="dks" imgURL={boltIMG} projectID='energy' content="Noget på dansk om Energy projectet"/>
      </ul>
    </div>);
  }
};

export default Projects;