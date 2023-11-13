/* eslint-disable react/jsx-key */
import "../CSS/CardOfertaServicio.css"

export const CardOfertaServicio = () => {
let data=[ {
    "id": 1,
    "nombre": "Juan",
    "apellido": "Pérez",
    "tareas":  "profesor",
    "descripcion":"ayuda en preparacion para la prueba paes",
    "salario":"7.000 / Hora",
    "modalidad":"Presencial/remoto",
    "Lugar":"providencia",
    "dias":6
  },
  {
    "id": 2,
    "nombre": "María",
    "apellido": "Gómez",
    "tareas": "garzon",
    "descripcion":"apoyo en matrimonio",
    "salario":"25.000 / Evento",
    "modalidad":"Presencial/remoto",
    "Lugar":"providencia",
    "dias":3
  },
  {
    "id": 3,
    "nombre": "Pedro",
    "apellido": "Martínez",
    "tareas":  "programador",
    "descripcion":"desarollo de App movil",
    "salario":"1.000.000 / Mes",
    "modalidad":"Presencial/remoto",
    "Lugar":"providencia",
    "dias":1
  }]



    
    return (
        <div className="bloque-carrucel-ofertas">
       {data.map((item)=>(<div className="bloque_tarjeta">
            <div className="bloque-seccion-perfil">
                <img src="http://res.cloudinary.com/ddlvvek8u/image/upload/v1699877627/icons8-usuario-masculino-en-c%C3%83%C2%ADrculo-100.png.png" alt="logoIcon" width={"50px"} height={"auto"} />
                
                <img src="http://res.cloudinary.com/ddlvvek8u/image/upload/v1699878111/icons8-me-gusta-50.png.png" alt="corazonlike" width={"25px"} height={"25px"}/>
            </div>
            <br />
       
            <strong>{item.tareas} </strong> <span>solicitado por</span><strong> {item.nombre}</strong>
            <p>{item.descripcion}</p>
            <br />

            <div className="bloque-etiquetas">
                <span className="elemento-modalidad">{item.modalidad}</span>
                <span className="elemento-lugar">{item.Lugar}</span>
                <span className="elemento-salario">{item.salario}</span>
            </div>
            <br />
            <span>Publicado hace {item.dias} dia(s)</span>
            <br />
        </div>))}
        </div>
    )
}
