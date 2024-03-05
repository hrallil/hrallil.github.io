// MyFunctionalComponent.tsx
import { directive } from '@babel/types';
import React from 'react';

import upIMG from '../img/up.png'


const ToTop = () => {
    return (
    <div className='ToTop'>
      <a href="#header"><img className='ToTopButton' src={upIMG} alt="" /></a>
    </div>
  );
}


export default ToTop;