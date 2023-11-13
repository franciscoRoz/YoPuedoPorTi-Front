import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../screen/HomePage'
import { ListadeColaboradores } from '../screen/ListadeColaboradores'
import { FormulariodeRegistro } from '../screen/FormulariodeRegistro'
import { Informacion } from '../screen/Informacion'
import { RegistroExitoso } from '../screen/RegistroExitoso'



export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/*' element={<HomePage/>}/>
        <Route path='/ListaColaboradores/:servicio' element={<ListadeColaboradores/>}/>
        <Route path='/RegistrarUsuario' element={<FormulariodeRegistro/>}/>
        <Route path='/Informacion' element={<Informacion/>}/>
        <Route path='/RegistrarUsuario/RegistroExitoso' element={<RegistroExitoso/>}/> 
    </Routes>
  )
}
