/* eslint-disable react/jsx-key */
import "../CSS/CardCategorias.css"
export const CardCategorias = () => {

  let data = [
    
    { "logo": "http://res.cloudinary.com/ddlvvek8u/image/upload/v1699882437/DJ.png.png", "Categoria": "DJ" },
    { "logo": "http://res.cloudinary.com/ddlvvek8u/image/upload/v1699882659/paseoperrros.png.png", "Categoria": "Paseador de Mascotas" },
    { "logo": "http://res.cloudinary.com/ddlvvek8u/image/upload/v1699882460/icons8-camarero-macho-64.png.png", "Categoria": "Camarero" },
    { "logo": "http://res.cloudinary.com/ddlvvek8u/image/upload/v1699882486/icons8-fot%C3%83%C2%B3grafo-profesional-50.png.png", "Categoria": "Fotografo" },
    { "logo": "http://res.cloudinary.com/ddlvvek8u/image/upload/v1699882529/icons8-programador-64.png.png", "Categoria": "Programador" },
    { "logo": "http://res.cloudinary.com/ddlvvek8u/image/upload/v1699882552/limpiezaauto.png.png", "Categoria": "Lavado Autos" },
    { "logo": "http://res.cloudinary.com/ddlvvek8u/image/upload/v1699882591/mesero.png.png", "Categoria": "Mesero" },
    { "logo": "http://res.cloudinary.com/ddlvvek8u/image/upload/v1699882621/ni%C3%83%C2%B1era.png.png", "Categoria": "Niñera" },
    { "logo": "http://res.cloudinary.com/ddlvvek8u/image/upload/v1699882686/profesor.png.png", "Categoria": "Profesor" },
    

  ]


  return (
    <div className="bloque-carrucel-categorias">
      {data.map((item)=>(
           <div className="bloque-categoria">
           <img src={item.logo} alt="LogoServicio"  width={"50px"} height={"50px"}/>
           <div className="elemento-categoria">
             <span>{item.Categoria}</span>
             <a href={`/Colaborador/ListaColaboradores/${item.Categoria}`}>Explorar</a>
           </div>
         </div>
      ))}
   

    </div>
  )
}
