import React from "react";
import './technologies.css';
import { useSelector } from 'react-redux';



export default function Technologies(){
    const language = useSelector((state) => state.language);
    return(
        <div className="container-1">
            <div className="container-2">
                <h1>{language === 'spanish' ? 'Tecnologias: ' : 'Technologies: '}</h1>
                <div className="container-3">
                    <ul>
                        <li>{language === 'spanish' ? 'HTML: nivel avanzado' : 'HTML: advanced level'}</li>
                        <li>{language === 'spanish' ? 'CSS: nivel avanzado' : 'CSS: advanced level'}</li>
                        <li>{language === 'spanish' ? 'Sass: nivel intermedio' : 'Sass: intermediate level'}</li>
                        <li>{language === 'spanish' ? 'Bootstrap: nivel intermedio' : 'Bootstrap: intermediate level'}</li>
                        <li>{language === 'spanish' ? 'Figma: nivel intermedio' : 'Figma: intermediate level'}</li>
                    </ul>
                    <ul>
                    <li>{language === 'spanish' ? 'JS: nivel intermedio' : 'JS: intermediate level'}</li>
                        <li>{language === 'spanish' ? 'MySQL: nivel intermedio' : 'MySQL: intermediate level'}</li>
                        <li>{language === 'spanish' ? 'React.js: nivel intermedio' : 'React.js: intermediate level'}</li>
                        <li>{language === 'spanish' ? 'Redux: nivel intermedio' : 'Redux: intermediate level'}</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}