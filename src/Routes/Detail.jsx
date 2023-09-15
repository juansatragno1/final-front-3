import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../Components/utils/global.context';

const Detail = () => {
  const { state } = useContext(ThemeContext);
  const { data } = state;
  const { id } = useParams();

  // Obtener el objeto de datos del dentista según su ID
  const dentist = data.find((item) => item.id === parseInt(id));

  return (
    <div style={{
      background: state.theme.background,
      color: state.theme.color,
      paddingTop: state.theme.padding,
      minHeight: '100vh', 
    }}>
      <h2>Detalles del Dentista</h2>
      {dentist && (
        <div>
          <p>Nombre: {dentist.name}</p>
          <p>Username: {dentist.username}</p>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Sitio web: {dentist.website}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;

