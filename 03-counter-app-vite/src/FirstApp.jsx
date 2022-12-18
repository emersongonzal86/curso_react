//COLOCAR ESTILOS CSS
/* React permite usas cuaquier framework de css

crearemos un estilo global co un archivo llamado style.css
no importa como se llame el archivo
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