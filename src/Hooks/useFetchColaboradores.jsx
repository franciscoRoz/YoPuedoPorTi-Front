import { useState, useEffect } from 'react' 
import { getColaboradores } from '../Helpers/getColaboradores';



export const useFetchColaboradores = ( Servicio ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });
  
    useEffect( () => {
             
        getColaboradores( Servicio )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })

    }, [])


    


    return state;  // { data:[], loading: true };
}