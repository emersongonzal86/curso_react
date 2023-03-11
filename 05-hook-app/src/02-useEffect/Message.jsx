import { useEffect } from 'react';

export const Message = () => {

    useEffect(() => {
        //con este useEffect se mont y desmonta el componente cuando el usuario es igual al que se esta validando
      console.log('Message Mounted');
    
      return () => {
        console.log('Message Unmounted');
      }
    }, [])
    

  return (
    <>
     <h3>Usuario ya existe</h3> 
    </>
  )
}


