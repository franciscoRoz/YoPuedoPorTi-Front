/* eslint-disable react/prop-types */


export const Tarjetas = (props) => {
    let {data,estado}=props
    console.log(data);
  return (
    <>
    {estado?null:
    <>{data.Colaboradore.map((item,index) => (
        <div key={index} className="elemento-card-colaborador">
        <div className="elemento-datos-personales">
          <span>Nombres: {item.nombres}</span>
          <span>Apellidos: {item.apellidos}</span>
          <span>Servicio: DJ</span>
        </div>
        <div className="elemento-calificacion">
          <span> {`Calificacion: ${item.calificacion} (${item.numeroreseñas})`}</span>
          <button className="elemento-contratar">Contratar</button>
        </div>
      </div>))}</>}
    
    </>
  )
}
