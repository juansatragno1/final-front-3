import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ThemeContext } from './utils/global.context';
import '../App.css'

const Navbar = () => {
  const { state, dispatch } = useContext(ThemeContext);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div className='styleNavbar' style={{
      background: state.theme.background,
      color: state.theme.color,
    }}>
      <img src="/images/DH.png" alt="Avatar" width={200} />
      <h1 style={{
        fontFamily: "'Borel', cursive",
        fontSize: '3vw',
      }}>Clínica Modelo</h1>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/favs">Favs</Link></li>
        <button onClick={toggleTheme}>Change theme</button>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;



