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
    "Lugar":"Vitacura",
    "dias":6,
    "img":"http://res.cloudinary.com/ddlvvek8u/image/upload/v1700187499/WhatsApp%20Image%202023-11-16%20at%203.16.00%20PM%20%281%29.jpeg.jpg"
  },
  {
    "id": 2,
    "nombre": "Samanta",
    "apellido": "Rivera",
    "tareas":  "Fotografo",
    "descripcion":"Fotografo para matrimonio",
    "salario":"300.000 / Evento",
    "modalidad":"Presencial",
    "Lugar":"Las Condes",
    "dias":15,
    "img":"http://res.cloudinary.com/ddlvvek8u/image/upload/v1700188048/WhatsApp%20Image%202023-11-16%20at%203.16.00%20PM.jpeg.jpg"
  },
  {
    "id": 3,
    "nombre": "Pedro",
    "apellido": "Gómez",
    "tareas": "garzon",
    "descripcion":"apoyo en matrimonio",
    "salario":"25.000 / Evento",
    "modalidad":"Presencial",
    "Lugar":"La Dehesa",
    "dias":3,
    "img":"http://res.cloudinary.com/ddlvvek8u/image/upload/v1700187065/WhatsApp%20Image%202023-11-16%20at%203.15.58%20PM%20%281%29.jpeg.jpg"
  
  },
  {
    "id": 4,
    "nombre": "Maria",
    "apellido": "Martínez",
    "tareas":  "lavado de auto",
    "descripcion":"Lavado de auto a domicilio",
    "salario":"15.000 / Auto",
    "modalidad":"Presencial",
    "Lugar":"Las Condes",
    "dias":1,
    "img":"http://res.cloudinary.com/ddlvvek8u/image/upload/v1700187886/WhatsApp%20Image%202023-11-16%20at%203.15.59%20PM%20%281%29.jpeg.jpg"
  }]



    
    return (
        <div className="bloque-carrucel-ofertas">
       {data.map((item)=>(<div className="bloque_tarjeta">
            <div className="bloque-seccion-perfil">
                <img src={item.img} alt="" width={"50px"} style={{borderRadius:"25px"}} />
                
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
