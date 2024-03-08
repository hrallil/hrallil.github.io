import React from 'react';
import defaultIMG from '../img/default.png';

interface ProjectItemProp {
  lang: string;
  content: string;
  projectID: string;
  imgURL: string;
}

const ProjectItem: React.FC<ProjectItemProp> = ({lang, imgURL, content, projectID }) => {
  return (
    <li id={projectID} className='Project-item'>
      <img className='Project-img' src={imgURL ?? defaultIMG} alt={projectID + "img"}/>
      <div className='Project-download'>
        <a href="https://hrallil.itch.io/slash">Link to slash download </a>
        <a href="{slashPDF}" download >Download report here</a> {/* shit doesnt work, cant find the file*/}
      </div>
      <div className='Project-content'>{content}</div> {/*This project is created with the purpose of understanding the game engine 'unity' and the process of creating a game. As a produt a game, SLASH, has been created. This game follows the genre styles of rogue-like. In this game, a randomly generated dungeon will allow the player to treverse and find two keys to pass through the end-gate. This player needs to avoid enemies, spikes and other posible obstacles on his way. The enemies hunt the player with the help of an implementation of Dijkstra's algorithm, allowing the enemies to pathfind around obstacles.*/}
  </li>
  );
};

export default ProjectItem;