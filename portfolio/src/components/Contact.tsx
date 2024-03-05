// MyFunctionalComponent.tsx
import { directive } from '@babel/types';
import React from 'react';

interface ContactProps {
  lang: string;
}
const email = "mathias.larsen0@gmail.com"
const linkedin = "https://www.linkedin.com/in/mathias-ruc-larsen/"
const phone = "20768029"
const git = "https://github.com/hrallil"
const Contact: React.FC<ContactProps> = ({ lang }) => {
  if (lang=="en"){
    return (
    <div className='Contact'>
      <h1 id='contact' className='Title'>Contact me</h1>
      <p>Email: {email}</p>
      <p>LinkedIn: <a href={linkedin}>{linkedin}</a></p>
      <p>github: <a href={git}>{git}</a></p>
      <p>Phone: {phone}</p>

    </div>
  );
    }
  else{
    return (
    <div className='Contact'>
      <h1 id='contact' className='Title'>Kontakt mig</h1>
      <p>Email: {email}</p>
      <p>LinkedIn: <a href={linkedin}>{linkedin}</a></p>
      <p>github: <a href={git}>{git}</a></p>
      <p>Telefon: {phone}</p>
    </div>);
  }
};

export default Contact;