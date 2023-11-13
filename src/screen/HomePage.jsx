import { Link } from "react-router-dom"
import { CardOfertaServicio } from "../Components/CardOfertaServicio"
import { FormBusquedaServicio } from "../Components/FormBusquedaServicio"
import { Header } from "../Components/Header"
import "../CSS/HomePage.css"
import { CardCategorias } from "../Components/CardCategorias"
import InstagramLogo from "../Components/IgLogo"
//import { CardExperiencia } from "../Components/CardExperiencia"
export const HomePage = () => {
  return (
    <div >
        <Header/>
        <InstagramLogo/>
        <div className="bloque-FormBusqueda">
            <FormBusquedaServicio/>
            <img src="http://res.cloudinary.com/ddlvvek8u/image/upload/v1699898074/dog-walker-with-dogs-at-the-park-free-vector-removebg-preview.png.png" alt="Imagen" style={{marginLeft:"200px"}} />
        </div>
        <div className="bloque-servicios-disponibles">
          <h2>Descubre los trabajos disponibles</h2>
        
            <CardOfertaServicio/>
          
        </div>
        <div className="bloque-registros">
          <div className="elemento-usuario">
            <Link to='/RegistrarUsuario' className="modify-usuario">Registrarme como Usuario</Link>
          </div>
          <div className="elemento-colaborador">
          <Link className="modify-colaborador">Registrarme como Colaborador</Link>
          </div>
        </div>
        <div className="bloque-categorias-populares">
            <h2>Categorias Populares</h2>
            <CardCategorias/>
        </div>
        {/*<div className="bloque-experencia">
          <h2>Cuentanos tu experiencia</h2>
          <CardExperiencia/>
        </div>*/}
       
    </div>
  )
}
