
import FormularioColaborador from "../Components/FormularioRegistrocolaborador"
import { Header } from "../Components/Header"
import InstagramLogo from "../Components/IgLogo"
import "../CSS/FormulariodeRegistro.css"
export const FormulariodeRegistroC = () => {
  return (
    <div>
        <Header/>

        <div className="bloque-formulario">
        <h2>Datos de Registro Usuario</h2>
        <FormularioColaborador/>
        </div>
        <InstagramLogo/>
    </div>
  )
}
