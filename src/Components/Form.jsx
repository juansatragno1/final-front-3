import React, { useContext, useState } from 'react';
import { ThemeContext } from './utils/global.context';
import '../App.css'

const Form = () => {
  const { state } = useContext(ThemeContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleNombre = (e) => {
    setNombre(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const sendForm = (e) => {
    e.preventDefault();
    if (nombre.length <= 5) {
      setMensaje('Ingrese un nombre válido (más de 5 caracteres).');
      return;
    }
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!email.match(emailRegex)) {
      setMensaje('Ingrese una dirección de correo electrónico válido.');
      return;
    }
    setMensaje(`Gracias ${nombre}, nos pondremos en contacto vía mail a la brevedad.`);
  };

  return (
    <div style={{
      background: state.theme.background,
      color: state.theme.color,
      padding: state.theme.padding,
      minHeight: '100vh', 
    }} className="styleForm">
      <h2>Gracias por Contactarnos</h2>
      <p>Por favor ingresa tus datos</p>
      <form onSubmit={sendForm}>
        <div>
          <label>Nombre</label>
          <input
            style={{
              background: state.theme.background,
              color: state.theme.color,
              padding: '5px',
              border: '1px solid #ddd',
              borderRadius: '3px',
            }}
            type="text"
            placeholder="Ingrese su nombre"
            value={nombre}
            onChange={handleNombre}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            style={{
              background: state.theme.background,
              color: state.theme.color,
              padding: '5px',
              border: '1px solid #ddd',
              borderRadius: '3px',
            }}
            type="text"
            placeholder="Ingrese su Email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <button style={{
          backgroundColor: state.theme.background,
          color: state.theme.color,
          borderRadius: '8px',
          border: '1px solid transparent',
          padding: '0.6em 1.2em',
          margin: '10px',
          fontSize: '1em',
          fontWeight: '500',
          fontFamily: 'inherit',
          cursor: 'pointer',
        }}>Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Form;

