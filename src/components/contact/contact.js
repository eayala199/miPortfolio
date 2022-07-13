import React from "react";
import { useSelector } from 'react-redux';
import './contact.css';

export default function Contact() {
  const language = useSelector((state) => state.language);
    return(
      <div className="contenedorContact">
        <div className="contenedorContactPrinc">
          <h1>{language === 'spanish' ? 'Contacto: ' : 'Contact: '}</h1>
          <div className="contenedorContactSecu">
            <h2>{language === 'spanish' ? 'Telefono: ' : 'Phone: '}</h2>
              <p>(+549) 3816275571</p>
            <hr />  
            <h2>{language === 'spanish' ? 'e-mail: ' : 'e-mail: '}</h2>
              <p>estanilaoa@gmail.com</p>
            </div>
          </div>
      </div>
)
}
