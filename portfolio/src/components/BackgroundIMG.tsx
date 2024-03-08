import React from 'react';

interface backgroundIMGProps {
  img: string;
}
const email = "mathias.larsen0@gmail.com"
const linkedin = "https://www.linkedin.com/in/mathias-ruc-larsen/"
const phone = "20768029"
const git = "https://github.com/hrallil"
const BackgroundIMG: React.FC<backgroundIMGProps> = ({ img }) => {
    return (
        <div>
            <img className='background' src={img} />
        </div>
    )
};

export default BackgroundIMG;