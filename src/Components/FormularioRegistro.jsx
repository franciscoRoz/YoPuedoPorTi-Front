import { useState } from 'react';

const Formulario = () => {
  const [datos, setDatos] = useState({
    correo: '',
    telefono: '',
    nombres: '',
    apellidos: '',
    imagen1: null,
    imagen2: null,
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleImagen1 = (e) => {
    setDatos({
      ...datos,
      imagen1: e.target.files[0],
    });
  };

  const handleImagen2 = (e) => {
    setDatos({
      ...datos,
      imagen2: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('correo', datos.correo);
    formData.append('telefono', datos.telefono);
    formData.append('nombres', datos.nombres);
    formData.append('apellidos', datos.apellidos);
    formData.append('carnetfrente', datos.imagen1);
    formData.append('carnetback', datos.imagen2);

    // Aquí puedes realizar la petición con FormData, por ejemplo, utilizando fetch o Axios.
    // Ejemplo con fetch:
    fetch('https://yopuedoporti.dataecom.cl/Usuarios/Registrar', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log('Respuesta del servidor:', data))
      .catch((error) => console.error('Error en la petición:', error));
      window.location.replace(`/RegistrarUsuario/RegistroExitoso`)
     
  };

  return (
    <form onSubmit={handleSubmit} style={{padding:'10px'}}>
      
      <label>
        Nombres
        <br />
        <input type="text" name="nombres" value={datos.nombres} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Apellidos
        <br />
        <input type="text" name="apellidos" value={datos.apellidos} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Correo
        <br />
        <input type="email" name="correo" value={datos.correo} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Teléfono
        <br />
        <input type="tel" name="telefono" value={datos.telefono} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Tareas que puedes realizar
        <br />
        <input type="text" name="tareas" value={datos.tareas} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Carnet por el frente
        <br />
        <input type="file" name="imagen1" accept="image/*" onChange={handleImagen1} />
      </label>
      <br />
      <br />
      <label>
        Carnet por atras
        <br />
        <input type="file" name="imagen2" accept="image/*" onChange={handleImagen2} />
      </label>
      <br />
      <br />
      <br />
      <button type="submit" className='elemento-enviar' >Enviar</button>
    </form>
  );
};

export default Formulario;