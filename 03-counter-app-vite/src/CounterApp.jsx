//UseState - Hook
//los Hooks son lo primero que se importa
/*REGLA
la palabra use identifica que es un Hook para nombrarlos simepre debe iniciar con use
NUESTRO hOOKS PERSONALIZADOS DEBEN SEGUIR ESA REGLA
*/
import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

  //del componente padre le estoy pasando el valor value que se ingresa en main.jsx
  //que el valor inicial que tenemos en export const CounterApp = ({value}) linea 10
  const [ counter, setCounter ] = useState( value );

  const handleAdd = (  ) =>{
    //console.log(event)
    //incrementando el contador en uno cada vez ue toca el boton
    setCounter( counter + 1);
//otra forma de hacer el incremento en uno usando funciones de flecha
    //setCounter((c)=> c+1)
    
  }
    
    return (

      

      <>
      <h1>Counter App</h1>
         
          <h2> { counter }</h2>
        
        <button onClick={ handleAdd }>
          +1
        </button>
          
      </>
      
      )
  }

  CounterApp.propTypes ={
    value: PropTypes.number.isRequired,
    
  }