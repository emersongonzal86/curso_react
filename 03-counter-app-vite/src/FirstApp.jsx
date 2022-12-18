//Impresión de variables en el HTML
/*Las expresiones de javascript se escriben entre {}
 se deben colocar expresiones permitidas que no sean un objeto 
 ejemplo {1+6}
 se pueden imprimir constantes
export const FirstApp = () => {
    
    const newMessage = 'Emerson'
    
    return (
      <>
          <h1>{newMessage}</h1>
          <p> Soy un subtitulo</p>
          
      </>
      
  
    )
  }

  REGLA DE REACT
  Sie el valor de una variable no se va acambiar es una constante
  o no cambia al renderizar el componente
  debe estar fuera de este 
ESTO NO IMPLICA QUE ESTO ESTE EN EL SCOPE GLOBAL
SOLO HACE PARTE DE ESTE MODULO
no va a reprocesarlo en caso que requiera ser re-renderizado
los valores booleanos o se imprimen pero se pueden
enviar como argumento
los arreglos se envian como elementos separados
no es un unico elemento


const newMessage = 'Emerson'
export const FirstApp = () => {
    
    
    
    return (
      <>
          <h1>{newMessage}</h1>
          <p> Soy un subtitulo</p>
          
      </>
      
  
    )
  }


NO SE DEBEN COLOCAR OBJETOS
noson permitidos como React child
si se necesita se puede renderizar como n array
{newMessage.title}
const newMessage = {
    message: 'Hola Mundo',
    title: 'Emerson'
}
export const FirstApp = () => {
    
    return (
      <>
          <h1>{newMessage}</h1>
          <p> Soy un subtitulo</p>
          
      </>
      
  
    )
  }

  SI SE NECESITA IMPRIMIR EL OBJETO SE HA CE CON

  {JSON.stringify(newMessage)}
se cambia la etiqueta por code para que se ve a mejor
<code>{JSON.stringify(newMessage)}</code>
*/

/*const newMessage = {
    message: 'Hola Mundo',
    title: 'Emerson'
};*/

/* TENER CUIDADO SI LA FUNCION A LLAMAR ES ASYNC

const getResult = async() =>{
    return 4+4
}

UNA PROMESA ES UN OBJETO Y NO SE PUEDE SERIALIZAR
*/

const getResult = (a,b) =>{
    return a+b
}
export const FirstApp = () => {
    
    return (
      <>
      <h1>{getResult(1,2)}</h1>
          {/* <code>{JSON.stringify(newMessage)}</code> */}
          <p> Soy un subtitulo</p>
          
      </>
      
      )
  }