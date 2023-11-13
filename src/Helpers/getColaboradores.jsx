import axios from "axios";

export const getColaboradores = async (Servicio) => {
  let URL = `https://yopuedoporti.dataecom.cl/Colaborador/ListaTrabajadores/${Servicio}`;
 
  console.log(URL);
 
  try {
  
    const response = await axios.get(URL);
  
    return  response;
   
  } catch (error) {
   
    console.log("error");
  }
};


