import React from 'react';
import s from './home.module.css';
import { useSelector } from 'react-redux';


export default function Landing() {
  const language = useSelector((state) => state.language);
  return (
    <div className={s.landcont}>

      <h1 className={s.btnLand}>{language === 'spanish' ? '"Bienvenidos a mi portfolio personal!!!, hecho con mucho cariño." ' : '"Welcome to my personal portfolio!!! Made with love."'}</h1>
      
    </div>
  )
}

