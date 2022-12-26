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
  
  const handleSubtract =() => setCounter( counter - 1);
  // para el reset voy a pasar el valor que viene del componente padre en main.jsx
  const handleReset = () => setCounter ( value );

  return (

    <>
    <h1>Counter App</h1>
       
        <h2> { counter }</h2>
      
      <button onClick={ handleAdd }> +1 </button>
      <button onClick={ handleSubtract }> -1 </button>
      <button onClick={ handleReset}> Reset </button>
        
    </>
    
    );
    
  }

  CounterApp.propTypes ={
    value: PropTypes.number.isRequired,
    
  }