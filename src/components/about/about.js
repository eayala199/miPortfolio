import React from "react";
import './about.css';
import { useSelector } from 'react-redux';

export default function About(){
    const language = useSelector((state) => state.language);
    return(
        <div className="container-princ1">
            <div className="container-secu1">
                <h1>{language === 'spanish' ? 'Sobre mi: ' : 'About me: '}</h1>
                <div className="container-secu2">
                    <p>{language === 'spanish' ? 'Bienvenidos!!, me presento, mi nombre es Estanislao Ayala y este es mi portfolio personal. Les cuento un poco sobre mi, soy argentino, actualmente vivo en la provincia de Tucuman, en el norte de Argentina. Soy un apasionado por la tecnologia mas que nada me encanta el desarrollo de Frontend, donde actualmente me estoy desempeñando. Sobre mis hobbies me encantan los videojuegos, soy un fanatico de Playstation y tuve todas sus consolas (menos la Playstation 5 por ahora jajaja). En mi tiempo libre tambien me gusta seguir aprendiendo cosas nuevas, escuchar algun podcast o hacer algun curso nuvo que me ayude en el area de desarrollo Frontend. Tambien soy un apasionado del futbol, soy fnatico del club atletico River Plate y unos de mis sueños mas grandes es poder vivir la experiencia de un mundial. Sin mas que agregar, espero que disfruten mi portfolio y que tengan una hermosa experiencia. ' : 'Welcome! I introduce myself, my name is Estanislao Ayala and this is my personal portfolio. I tell you a little about myself, I am Argentine, I currently live in the province of Tucuman, in the north of Argentina. I am passionate about technology, more than anything I love Frontend development, where I am currently working. About my hobbies I love videogames, I am a Playstation fanatic and I had all their consoles (except the Playstation 5 for now hahaha). In my free time I also like to continue learning new things, listen to a podcast or take a new course that helps me in the area of ​​Frontend development. I am also passionate about soccer, I am a fan of the River Plate athletic club and one of my biggest dreams is to be able to live the experience of a World Cup. Without further ado, I hope you enjoy my portfolio and have a wonderful experience. '}</p>
                    <img className="foto-about" alt="foto-about" src={require('../../assets/perfil.png')}/>
                </div>
            </div>
        </div>
    )
}