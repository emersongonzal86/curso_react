//COMUNICACIÓN ENTRE COMPONENTES -Props

/*props son las propiedades que le enviamos a una funcion 
las props son objetos por los cuales fluye informacion desde un  componente padre a un componente hijo
en este ejemplo desde el archivo main puedo enviar informacion al componente FirstApp.jsx
las props siempre se desestructuran xport const FirstApp = ({title}) => {
y se pueden llamar directo  <h1>{title}</h1>

{subTitle +1 } le sumo uno al valor enviado como props desde main

*/


export const FirstApp = ({title, subTitle}) => {

    //console.log(props);
    
    return (
      <>
      <h1>{ title }</h1>
          {/* <code>{JSON.stringify(newMessage)}</code> */}
          <p> Soy un subtitulo {subTitle +1 }</p>
          
      </>
      
      )
  }