import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Peticion } from '../../helpers/Peticion';
import { Global } from '../../helpers/Global';

export const Crear = () => {

  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState('no_enviado')

  const guardarArticulo = async (e) => {
    e.preventDefault();

    // Recogiendo datos del formulario.
    let nuevoArticulo = formulario;

    // Guardar articulos en el backend.
    const { datos } = await Peticion(Global.url + 'create', 'POST', nuevoArticulo);

    if (datos.status === 'success') {
      setResultado('Guardado');
    } else {
      setResultado('Error');
    }

    // Subir la imagen
    const fileInput = document.querySelector('#file');

    if (datos.status === 'success' && fileInput.files[0]) {
      setResultado('Guardado');

      const formData = new FormData();
      formData.append('file0', fileInput.files[0]);

      const subirImagen = await Peticion(Global.url + 'subir-imagen/' + datos.article._id, 'POST', formData, true);

      if (subirImagen.datos.status === 'success') {
        setResultado('Guardado');
      } else {
        setResultado('Error');
      }
    } else {
      setResultado('Error');
    }
    console.log(resultado);
  }

  return (
    <div className='jumbo' >
      <h1>Crear Artículo</h1>
      <p>Formulario para crear un artículo</p>
      {/* <pre>{JSON.stringify(formulario)}</pre> */}

      <strong>{resultado == 'Guardado' ? 'Artículo guardado con exito' : ''}</strong>
      <strong>{resultado == 'Error' ? 'Los datos proporcionados son incorrectos' : ''}</strong>

      {/* montar  formulario*/}
      <form className="formulario" onSubmit={guardarArticulo} >

        <div className='form-group' >
          <label htmlFor='titulo' >Titulo</label>
          <input type="text" name='title' onChange={cambiado} />
        </div>

        <div className='form-group' >
          <label htmlFor='contenido' >Contenido</label>
          <textarea type="text" name='content' onChange={cambiado} />
        </div>

        <div className='form-group' >
          <label htmlFor='file0' >Imagen</label>
          <input type="file" name='file0' id='file' onChange={cambiado} />
        </div>

        <input type="submit" value='guardar' className='btn btn-success' />

      </form>

    </div>
  )
}
