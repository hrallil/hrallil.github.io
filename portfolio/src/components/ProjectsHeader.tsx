// MyFunctionalComponent.tsx
import { directive } from '@babel/types';
import React from 'react';
import boltIMG from '../img/bolt.jpg'
import cubeIMG from '../img/rubix-cube.png'
import slashIMG from '../img/slash.png'

interface ProjectsProps {
  lang: string;
}

const ProjectsHeader: React.FC<ProjectsProps> = ({ lang }) => {
    return (
        <div className='Projects-header'>
            <a href="#slash">
                <img className= "Project-img" src={slashIMG} alt="Slash frontpage image" />
            </a>
            <a href="#cube">
                <img className= "Project-img" src={cubeIMG} alt="Rubix cube" />
            </a>
            <a href="#energy">
                <img className= "Project-img" src={boltIMG} alt="Energy image" />
            </a>
        </div>
    )
};

export default ProjectsHeader;