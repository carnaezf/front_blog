import React from 'react';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { Inicio } from '../components/pages/Inicio';
import { Articulos } from '../components/pages/Articulos';
import { Articulo } from '../components/pages/Articulo';
import { Header } from '../components/layout/Header';
import { Nav } from '../components/layout/Nav';
import { Sidebar } from '../components/layout/Sidebar';
import { Footer } from '../components/layout/Footer';
import { Crear } from '../components/pages/Crear';
import { Busqueda } from '../components/pages/Busqueda';
import { Editar } from '../components/pages/Editar';


export const Rutas = () => {
    return (

        <HashRouter>
            {/* Layout */}
            <Header />
            <Nav />

            {/* Contenido central y rutas */}

            <section id='content' className='content' >
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/articulos' element={<Articulos />} />
                    <Route path='/crear-articulos' element={<Crear />} />
                    <Route path='/buscar/:busqueda' element={<Busqueda />} />
                    <Route path='/articulo/:id' element={<Articulo/>} />
                    <Route path='/editar/:id' element={<Editar/>} />

                    <Route path='*' element={
                        <div className='jumbo' >
                            <h1>Error 404</h1>
                        </div>
                    } />
                </Routes>
            </section>

            <Sidebar />

            <Footer />

        </HashRouter>

    )
}