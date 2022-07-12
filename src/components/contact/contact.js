import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postContact } from '../../Redux/Actions/index';
import './contact.css';

export default function Contact() {
  const postContactState = useSelector((state) => state.postContact);

  const dispatch = useDispatch();
  const [inputContact, setInputContact] = useState({
    name: '',
    email: '',
    mensaje: '',
  });

  function handleChangeContac(e) {
    setInputContact({
      ...inputContact,
      [e.target.name]: e.target.value,
    });
    /* console.log(inputContact) */
  }

  function handleSubmitContact(e) {
    e.preventDefault();
    dispatch(postContact(inputContact));
    console.log('Contactado');
    setInputContact({
      name: '',
      email: '',
      mensaje: '',
    });
    console.log(postContactState.json);
  }

  return (
    <div className="contenedorContact">
      <div className="contact">
        <h1 className="h1Contact">Contactate con nosotros:</h1>

        <form className="formulario" onSubmit={(e) => handleSubmitContact(e)}>
          <p>
            <label className="labelContact">NOMBRE:</label>

            <br />

            <input
              className="inputContact"
              type="text"
              name="name"
              id="nombre"
              value={inputContact.name}
              required="obligatorio"
              onChange={(e) => handleChangeContac(e)}
            />
          </p>

          <p>
            <label className="labelContact">MAIL:</label>

            <br />

            <input
              className="inputContact"
              type="email"
              name="email"
              id="email"
              value={inputContact.email}
              required="obligatorio"
              onChange={(e) => handleChangeContac(e)}
            />
          </p>

          <p>
            <label className="labelContact">DEJANOS TU MENSAJE:</label>

            <br />

            <textarea
              name="mensaje"
              className="textareaContact"
              id="mensaje"
              value={inputContact.mensaje}
              required="obligatorio"
              onChange={(e) => handleChangeContac(e)}
            />
          </p>

          <button
            className="btnContact"
            type="submit"
            name="enviar_formulario"
            id="enviar"
          >
            <p>Enviar</p>
          </button>
        </form>
      </div>
    </div>
  );
}
