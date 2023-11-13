
import { useParams } from "react-router-dom"
import { CardColaborador } from "../Components/CardColaborador"
import { Header } from "../Components/Header"
import InstagramLogo from "../Components/IgLogo"
import "../CSS/ListadeColaboradores.css"
import { useFetchColaboradores } from "../Hooks/useFetchColaboradores"

export const ListadeColaboradores = () => {
  const { Servicio } = useParams();
  let {data,loading}=useFetchColaboradores(Servicio)

  return (
    <div >
        <Header/>

        <div className="bloque-lista-colaboradores">
        <h2>Colaboradores Disponibles</h2>
        <CardColaborador data={data} estado={loading}/>
        </div>
        <InstagramLogo/>
        </div>
  )
}
