import React, { useContext, useState } from 'react';
import { ThemeContext } from '../Components/utils/global.context';

const Favs = () => {
  const { state } = useContext(ThemeContext);
  const localFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [bandera, setBandera] = useState(localFavorites.length === 0);

  const limpiarFavoritos = () => {
    localStorage.clear();
    setBandera(true);
  }

  return (
    <div style={{
      background: state.theme.background,
      color: state.theme.color,
      paddingTop: state.theme.padding,
      minHeight: '100vh', /* Ajustar la altura como desees */
    }}>
      <h1>Favoritos</h1>
      {bandera ? (
        <h2>No hay favoritos</h2>
      ) : (
        <div className='cardContainer'>
          {localFavorites.map((favorite, index) => {
            const parsedFavorite = JSON.parse(favorite);
            return (
              <div key={parsedFavorite.id} className='card'>
                <img src="/images/doctor.jpg" alt="Doctor" />
                <h2>{parsedFavorite.name}</h2>
                <p>Email: {parsedFavorite.email}</p>
                <p>Teléfono: {parsedFavorite.phone}</p>
              </div>
            );
          })}
        </div>
      )}
      <button onClick={limpiarFavoritos}>Eliminar todo</button>
    </div>
  );
}

export default Favs;


