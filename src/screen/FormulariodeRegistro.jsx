import Formulario from "../Components/FormularioRegistro"
import { Header } from "../Components/Header"
import InstagramLogo from "../Components/IgLogo"
import "../CSS/FormulariodeRegistro.css"
export const FormulariodeRegistro = () => {
  return (
    <div>
        <Header/>

        <div className="bloque-formulario">
        <h2>Datos de Registro Usuario</h2>
        <Formulario/>
        </div>
        <InstagramLogo/>
    </div>
  )
}
