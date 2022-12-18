//Retronar elementos en el componente - Fragment
/* al colocar una  nueva line a en el codigo vamos a tenere error
<h1>Primera Apliación de Emerson en React </h1>
    <p> Soy un subtitulo</p>

 porque las expresiones de JSX siempe deben tener un elemento padre
 es decir requieren un <div></div> que 
 englobe todo el codigo
 en versiones anteriores de react lo englobaban en un <di></di>
export const FirstApp = () => {
  return (
    <div>
        <h1>Primera Apliación de Emerson en React </h1>
        <p> Soy un subtitulo</p>
    </div>
    

  )
}
pero esto genera problemas con el diseno
por cambios en el estilo y este div no tiene 
razon de ser
*/

/* para oder obtener multiple lineas de puede hacer
la imporcion de Fragment sin el div
adiciona
import {Fragment} from 'react'
export const FirstApp = () => {
    return (
      <Fragment>
          <h1>Primera Apliación de Emerson en React </h1>
          <p> Soy un subtitulo</p>
      </Fragment>
      
  
    )
  }
*/
/*nueva forma para importación de un fragmento sin
realizar la importación de Fragment
Es REGLA DE REACT SIEMPRE DEBEMOS REGRESAR UN NODO PADRE
dentro podemos usar el fragmento como agrupador de elemetos
JSX se pueden agrupar todos los que se necesiten*/

export const FirstApp = () => {
    return (
      <>
          <h1>Primera Apliación de Emerson en React </h1>
          <p> Soy un subtitulo</p>
          <h1>Primera Apliación de Emerson en React </h1>
          <p> Soy un subtitulo</p>
          <h1>Primera Apliación de Emerson en React </h1>
          <p> Soy un subtitulo</p>
          <h1>Primera Apliación de Emerson en React </h1>
          <p> Soy un subtitulo</p>
          <h1>Primera Apliación de Emerson en React </h1>
          <p> Soy un subtitulo</p>
      </>
      
  
    )
  }