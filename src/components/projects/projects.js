import React from "react";
import './projects.css';
import { useSelector } from 'react-redux';



export default function Projects(){
    const language = useSelector((state) => state.language);
    return(
        <div className="containerProjects1">
            <div className="containerProjects2">
                <h1>{language === 'spanish' ? 'Proyectos: ' : 'Projects: '}</h1>
                <div className="containerProjects3">
                    <ul>
                        <a href="https://radiant-mooncake-684e8b.netlify.app/"><li>{language === 'spanish' ? 'Calculadora' : 'Calculator'}</li></a>
                        <a href="https://adorable-seahorse-305387.netlify.app/"><li>{language === 'spanish' ? 'Pagina Web Estatica' : 'Static Web Page'}</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}