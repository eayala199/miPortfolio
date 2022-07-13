import React from "react";
import './studies.css';
import { useSelector } from 'react-redux';

export default function Studies(){
    const language = useSelector((state) => state.language);
    return(
        <div className="container-num1">
            <div className="container-secuNum1">
                <h1>{language === 'spanish' ? 'Estudios: ' : 'Studies: '}</h1>
                <div className="container-secuNum2">
                    <ul>
                        <li>{language === 'spanish' ? 'Egresado del Colegio San Patricio de Tucuman ' : "Graduated from Saint's Patrick High School of Tucuman"}</li>
                        <li>{language === 'spanish' ? 'Bachillerato internacional IB en ingles, nivel avanzado' : 'IB International Baccalaureate in English, Advanced Level'}</li>
                        <li>{language === 'spanish' ? 'Estudiante de la carrera de Certified Tech Developer en DigitalHouse' : 'Certified Tech Developer student at DigitalHouse'}</li>
                        <li>{language === 'spanish' ? 'Estudiante del curso de diseño UX/UI certificado por Google, becado por ComunidadIT' : 'Student of the UX/UI design course certified by Google, scholarship by ComunidadIT'}</li>
                        <li>{language === 'spanish' ? 'Maquetador web para Aettihub durante 1 año y 6 meses' : 'Web designer for Aettihub for 1 year and 6 months'}</li>
                    </ul>
                    <img className="foto-studies" alt="foto-studies" src={require('../../assets/imagenlinda.png')}/>
                </div>
            </div>
        </div>
    )
}