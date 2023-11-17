import { useState } from "react"
import "../CSS/FormBusquedaServicio.css"
import { Link } from "react-router-dom"

export const FormBusquedaServicio = () => {

  const [Busqueda, setBusqueda] = useState({Servicio:"",Lugar:""})
  let handleServicio =(e)=>{setBusqueda({...Busqueda,Servicio:e.target.value})}
  let handleLugar =(e)=>{setBusqueda({...Busqueda,Lugar:e.target.value})}
  let clearForm =()=>{setBusqueda({Servicio:"",Lugar:""})}

  return (
    <div className="bloque_formulario_servicio">
        <strong>Buscar Servicio</strong>
        <div className="elemento_marcador"></div>
        <br/>
        <p>Que servicio Buscar?</p>
        <input value={Busqueda.Servicio} type="text" placeholder="Car Wash" onChange={(e)=>{handleServicio(e)}}></input>
        <br/>
      
        <p>Donde Buscas el servicio?</p>
        <input value={Busqueda.Lugar} type="text" placeholder="Huechuraba" onChange={(e)=>{handleLugar(e)}}></input>
        <br/>

        <div className="bloque_botones">
          <button className="elemento_limpiar" onClick={clearForm}>Limpiar</button>
        <Link className="elemento_buscar" to={`/ListaColaboradores/${Busqueda.Servicio}`}> Buscar </Link>
        </div>
        </div>
  )
}
