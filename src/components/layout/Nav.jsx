import React from 'react';
import { NavLink } from 'react-router-dom';



export const Nav = () => {
  return (
    <div className='nav'>
      <ul>
        <li><NavLink to='/inicio'>Inicio</NavLink></li>
        <li><NavLink to='/articulos'>Articulos</NavLink></li>
        <li><NavLink to='/crear-articulos'>Crear articulos</NavLink></li>
        <li><a href='#'>Contacto</a></li>
      </ul>
    </div>
  )
}
