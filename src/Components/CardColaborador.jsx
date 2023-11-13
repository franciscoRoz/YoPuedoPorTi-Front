/* eslint-disable react/jsx-key */

import "../CSS/CardColaborador.css"
import { Tarjetas } from "./Tarjetas";




export const CardColaborador =(props) => {
  let { data,estado } = props;
  console.log(data);
  return (
    <div className="bloque-carrucel">
        <Tarjetas data={data} estado={estado}/>
        
    </div>
  )
}
