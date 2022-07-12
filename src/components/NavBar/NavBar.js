import React from 'react';
import './NavBar.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from '../../Redux/Actions/index';
import { Link } from 'react-router-dom';



export default function NavBar() {
    const language = useSelector((state) => state.language);
    const dispatch = useDispatch();
    function cambioIdioma (){   
        dispatch(changeLanguage());
    }
    
    return (
        <div className='container-principal'>
            <div className='container-secundario1'>
                <nav>
                    <ul className='lista-navbar'>
                        <Link to="/"><li>{language === 'spanish' ? 'Inicio' : 'Home'}</li></Link>
                        <Link to="/about"><li>{language === 'spanish' ? 'Sobre mi' : 'About me'}</li></Link>
                        <Link to="/sustentability"><li>{language === 'spanish' ? 'Tecnologias' : 'Technologies'}</li></Link>
                        <Link to="/sustentability"><li>{language === 'spanish' ? 'Estudios' : 'Studies'}</li></Link>
                        <Link to="/contact"><li>{language === 'spanish' ? 'Contacto' : 'Contact'}</li></Link>
                    </ul>
                </nav>
            </div>
            <div className='container_secundario2'>
                <img className='idioma' src={require('../../assets/idioma.png')} alt='idioma' onClick={()=>cambioIdioma()} />
            </div>
        </div>
    )
}
