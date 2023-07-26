import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
        <li>
          <Link to="/acerca-de-nosotros">ACERCA DE NOSOTROS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;