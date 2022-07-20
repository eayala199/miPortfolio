import React from 'react'
import f from './footer.module.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Footer() {
  const language = useSelector((state) => state.language);
  return (
    <footer className={f.container}>
      <div></div>
      <div className={f.lista}>
        <div >
          <ul className={f.listaFooter}>
            <Link to="/about"style={{ color: "black", textDecoration: "none" }} ><li className='sobremiFooter'>{language === 'spanish' ? 'Sobre mi' : 'About me'}</li></Link>
            <Link to="/technologies" style={{ color: "black", textDecoration: "none" }}><li>{language === 'spanish' ? 'Tecnologias' : 'Technologies'}</li></Link>
            <Link to="/studies" style={{ color: "black", textDecoration: "none" }}><li>{language === 'spanish' ? 'Estudios' : 'Studies'}</li></Link>
            <Link to="/projects" style={{ color: "black", textDecoration: "none" }}><li>{language === 'spanish' ? 'Proyectos' : 'Projects'}</li></Link>
            <Link to="/contact" style={{ color: "black", textDecoration: "none" }}><li>{language === 'spanish' ? 'Contacto' : 'Contact'}</li></Link>
          </ul>
          <ul className={f.listaFooterMobile}>
            <Link to="/technologies" style={{ color: "black", textDecoration: "none" }}><li>{language === 'spanish' ? 'Tecnologias' : 'Technologies'}</li></Link>
            <Link to="/studies" style={{ color: "black", textDecoration: "none" }}><li>{language === 'spanish' ? 'Estudios' : 'Studies'}</li></Link>
            <Link to="/contact" style={{ color: "black", textDecoration: "none" }}><li>{language === 'spanish' ? 'Contacto' : 'Contact'}</li></Link>
          </ul>
        </div>
        <hr className="lineaFooter" />
        <div className={f.lista2}>
          <a href="https://github.com/eayala199" style={{ color: "black", textDecoration: "none" }}><p><FaGithub style={{ fontSize: '25px' }} /></p></a>
          <a href="https://www.instagram.com/negroayala22/" style={{ color: "black", textDecoration: "none" }}><p><FaInstagram style={{ fontSize: '25px' }} /></p></a>
          <a href="https://www.linkedin.com/in/estanislao-ayala-b65a33203/" style={{ color: "black", textDecoration: "none" }}><p><FaLinkedin style={{ fontSize: '25px' }} /></p></a>

        </div>






      </div>
      <div></div>



    </footer>
  )
}

