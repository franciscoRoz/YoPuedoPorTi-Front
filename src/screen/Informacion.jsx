import "../CSS/Informacion.css"
import { Header } from "../Components/Header"
import InstagramLogo from "../Components/IgLogo"

export const Informacion = () => {
  return (
    <div>
     <Header/>
        <div className="bloque-informacion">
            
           <div> <h1>¿Quiénes somos? </h1>
            <p>Somos una innovadora empresa que se dedica a conectar a personas que desean ofrecer sus servicios con aquellas que buscan aprovecharlos. Nuestra misión es simplificar la forma en que las personas acceden a una amplia gama de servicios, creando una plataforma donde la comunidad puede conectarse de manera eficiente y satisfactoria. Yo puedo por ti surgió con el fin de otorgar tiempo libre para quienes lo necesiten. </p>
        </div>
        <div><h1>¿Qué hacemos? </h1>
            <p>Lo que hacemos es proporcionar un sistema de intermediación que une a aquellos que ofrecen servicios con quienes los necesitan. Nuestra plataforma conecta proveedores de servicios con una audiencia más amplia y ofrece a los consumidores una forma segura y conveniente de encontrar servicios de alta calidad. Nuestra tecnología de vanguardia facilita la transacción, garantizando la confiabilidad y la transparencia en cada interacción. Ya sea que esté buscando servicios de reparación, asesoramiento, entrega de productos o cualquier otra cosa, nuestro sistema lo conecta con la persona adecuada para satisfacer sus necesidades. </p>
         </div>
            
            
            <div>
            <h1>Visión</h1>
            <p>Nuestra visión es convertirnos en la principal plataforma de servicios en Chile, ofreciendo la más amplia variedad de opciones para satisfacer las necesidades de nuestra comunidad.</p>
            </div>
            <div>
            <h1>Misión</h1>
            <p>Nuestra misión en Yo Puedo por Ti es proporcionar a las personas tiempo libre de calidad. Nos dedicamos a construir una comunidad basada en la confianza y la seguridad, donde la ayuda mutua es fundamental en nuestro compromiso. Nuestro propósito es ofrecer a las personas la libertad de disfrutar de la vida al máximo, sabiendo que pueden contar con nuestra plataforma para satisfacer sus necesidades y liberar tiempo para lo que más les importa. </p>
            </div>
        </div>
        <InstagramLogo/>
    </div>
  )
}
