import React from 'react';
import './NavBar.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeLanguage } from '../../Redux/Actions/index';
import { Link } from 'react-router-dom';
// import { FaBars } from 'react-icons/fa';



export default function NavBar() {
    const language = useSelector((state) => state.language);
    const dispatch = useDispatch();
    function cambioIdioma (){   
        dispatch(changeLanguage());
    }
    
    return (
        <div className='container-principal'>
            <div className='container-secundario1'>
                {/* <p><FaBars/></p> */}
                <nav>
                    <ul className='lista-navbar'>
                        <Link to="/"><li>{language === 'spanish' ? 'Inicio' : 'Home'}</li></Link>
                        <Link to="/about"><li>{language === 'spanish' ? 'Sobre mi' : 'About me'}</li></Link>
                        <Link to="/technologies"><li>{language === 'spanish' ? 'Tecnologias' : 'Technologies'}</li></Link>
                        <Link to="/studies"><li>{language === 'spanish' ? 'Estudios' : 'Studies'}</li></Link>
                        <Link to="/contact"><li>{language === 'spanish' ? 'Contacto' : 'Contact'}</li></Link>
                    </ul>
                    <ul className='lista-navbarMob'>
                        <Link to="/" style={{ color: "black", textDecoration: "none" }}><li>{language === 'spanish' ? 'Inicio' : 'Home'}</li></Link>
                        <Link to="/about" style={{ color: "black", textDecoration: "none" }}><li>{language === 'spanish' ? 'Sobre mi' : 'About me'}</li></Link>
                    </ul>
                </nav>
            </div>
            <div className='container_secundario2'>
                <img className='idioma' src={require('../../assets/idioma.png')} alt='idioma' onClick={()=>cambioIdioma()} />
            </div>
        </div>
    )
}
