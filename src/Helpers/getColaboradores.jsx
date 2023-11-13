import axios from "axios";

export const getColaboradores = async (Servicio) => {
  let URL = `http://34.224.75.245:80/Colaborador/ListaTrabajadores/${Servicio}`;
 
URL="http://34.224.75.245:80/Colaborador/ListaTrabajadores/DJ"
 
  try {
  
    const response = await axios.get(URL);
  
    return  response;
   
  } catch (error) {
   
    console.log("error");
  }
};


