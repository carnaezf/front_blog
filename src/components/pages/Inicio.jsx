import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='jumbo' >
      <h1>Blog creado en React</h1>
      <p>Blog desarrollado con el MERM Stack (Mongo, Express, React y NodeJS)</p>
      <Link to='/articulos' className='button' >Ver los artículos</Link>
    </div>
  )
}
