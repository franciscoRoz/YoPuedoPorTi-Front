import { useState } from "react";
import "../CSS/FormularioRegistroUsuario.css";

const Formulario = () => {
  const regionesChile = [
    'Región de Arica y Parinacota',
    'Región de Tarapacá',
    'Región de Antofagasta',
    'Región de Atacama',
    'Región de Coquimbo',
    'Región de Valparaíso',
    'Región Metropolitana de Santiago',
    'Región del Libertador General Bernardo O\'Higgins',
    'Región del Maule',
    'Región de Ñuble',
    'Región del Biobío',
    'Región de La Araucanía',
    'Región de Los Ríos',
    'Región de Los Lagos',
    'Región de Aysén del General Carlos Ibáñez del Campo',
    'Región de Magallanes y de la Antártica Chilena',
  ];
  const comunasChile = [
    { nombre: 'Región de Arica y Parinacota', comunas: ['Arica', 'Camarones', 'Putre', 'General Lagos'] },
    { nombre: 'Región de Tarapacá', comunas: ['Iquique', 'Alto Hospicio', 'Pozo Almonte'] },
    { nombre: 'Región de Antofagasta', comunas: ['Antofagasta', 'Mejillones', 'Sierra Gorda'] },
    { nombre: 'Región de Atacama', comunas: ['Copiapó', 'Caldera', 'Tierra Amarilla'] },
    { nombre: 'Región de Coquimbo', comunas: ['La Serena', 'Coquimbo', 'Andacollo'] },
    { nombre: 'Región de Valparaíso', comunas: ['Valparaíso', 'Viña del Mar', 'Concón'] },
    { nombre: 'Región Metropolitana de Santiago', comunas: ['Santiago', 'Maipú', 'Puente Alto', 'Las Condes', 'Providencia', 'La Florida', 'Ñuñoa', 'La Pintana', 'Quilicura', 'Peñalolén', 'Macul', 'La Reina', 'Cerrillos', 'Pudahuel', 'Lo Prado', 'Estación Central', 'Independencia', 'Recoleta', 'Huechuraba', 'Quinta Normal', 'Conchalí', 'Renca', 'Lo Barnechea', 'Vitacura', 'Lo Espejo', 'Pedro Aguirre Cerda', 'Lo Padro', 'San Joaquín', 'San Miguel', 'San Ramón', 'Cerro Navia', 'Padre Hurtado', 'El Bosque', 'La Cisterna', 'San Bernardo', 'Pirque', 'Colina', 'Lampa', 'Tiltil', 'Melipilla', 'Alhué', 'Curacaví', 'María Pinto', 'San Pedro', 'Buin', 'Calera de Tango', 'Paine', 'Talagante', 'Peñaflor'] },
    { nombre: 'Región del Libertador General Bernardo O\'Higgins', comunas: ['Rancagua', 'Machalí', 'San Fernando'] },
    { nombre: 'Región del Maule', comunas: ['Talca', 'Curicó', 'Linares'] },
    { nombre: 'Región de Ñuble', comunas: ['Chillán', 'Bulnes', 'Quirihue'] },
    { nombre: 'Región del Biobío', comunas: ['Concepción', 'Talcahuano', 'Chillán Viejo'] },
    { nombre: 'Región de La Araucanía', comunas: ['Temuco', 'Puerto Montt', 'Padre Las Casas'] },
    { nombre: 'Región de Los Ríos', comunas: ['Valdivia', 'La Unión', 'Río Bueno'] },
    { nombre: 'Región de Los Lagos', comunas: ['Osorno', 'Puerto Varas', 'Puerto Montt'] },
    { nombre: 'Región de Aysén del General Carlos Ibáñez del Campo', comunas: ['Coyhaique', 'Aysén', 'Puerto Aysén'] },
    { nombre: 'Región de Magallanes y de la Antártica Chilena', comunas: ['Punta Arenas', 'Puerto Natales', 'Porvenir'] }
  ];


  const [datos, setDatos] = useState({
    correo: "",
    telefono: "",
    nombres: "",
    apellidos: "",
    rut: "",
    region: "",
    comuna: "",
    calle: "",
    numero: "",
    domicilio: ""
  });

  const comunasDeRegion = comunasChile.find(region => region.nombre === datos.region)?.comunas || [];
  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("correo", datos.correo);
    formData.append("telefono", datos.telefono);
    formData.append("nombres", datos.nombres);
    formData.append("apellidos", datos.apellidos);
    formData.append("rut", datos.rut);
    formData.append("region", datos.region);
    formData.append("comuna", datos.comuna);
    formData.append("calle", datos.calle);
    formData.append("numero", datos.numero);
    formData.append("domicilio", datos.domicilio);


    // Aquí puedes realizar la petición con FormData, por ejemplo, utilizando fetch o Axios.
    // Ejemplo con fetch:
    fetch("https://yopuedoporti.dataecom.cl/Usuarios/Registrar", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log("Respuesta del servidor:", data))
      .catch((error) => console.error("Error en la petición:", error));
    window.location.replace(`/RegistrarUsuario/RegistroExitoso`);
  };


  return (
    <form onSubmit={handleSubmit} className="bloque-formularioUsuario">
      <div className="Row">
        <div className="bloque-subseccion">
          <div className="headerseccion">
            <span>Datos Personales</span>
          </div>

      
      
          <div className="Datospersonales">
            <br />
            <label>
              RUT
              <br />
              <input
                type="text"
                name="rut"
                value={datos.rut}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Nombres
              <br />
              <input
                type="text"
                name="nombres"
                value={datos.nombres}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Apellidos
              <br />
              <input
                type="text"
                name="apellidos"
                value={datos.apellidos}
                onChange={handleChange}
              />
            </label>
            <br /><br />
            <label>
              Correo
              <br />
              <input
                type="email"
                name="correo"
                value={datos.correo}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Teléfono
              <br />
              <input
                type="tel"
                name="telefono"
                value={datos.telefono}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="bloque-subseccion">
          <div className="headerseccion">
            <span>Direccion</span>
          </div>
     
     
          <div className="Direccion">
            <br />
            <label>
              Region
              <br />
              <select className="select-regiones" name="region" id="regiones" onChange={handleChange} value={datos.region}>
                <option name="region" value="">Seleccionar Region</option>
                {regionesChile.map((region, index) => (
                  <option key={index} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <br />

            <label>
              Comuna
              <br />
              <select id="comunas" value="" name="comuna" onChange={handleChange} disabled={!datos.region}>
                <option name="comuna" value="">Seleccionar...</option>
                {comunasDeRegion.map(comuna => (
                  <option key={comuna} value={comuna}>
                    {comuna}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <br />

            <label>
              Calle
              <br />
              <input
                type="text"
                name="calle"
                value={datos.calle}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              numero
              <br />
              <input
                type="text"
                name="numero"
                value={datos.numero}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <label>
              Tipo Domicilio
              <br />
              <input
                type="text"
                name="domicilio"
                value={datos.domicilio}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      </div>





      <br />

      <button type="submit" className="elemento-enviar">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
