//DefaultProps
/*para usra prop-types en vite debe instalarse manualmente usando el comando yarn add prop-types
se importa mediante import PropTypes from 'prop-types'; OJO CON LAS MAYUSCULAS Y MINUSCULAS*/

/*

*/
import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {

    //console.log(props);
    
    return (
      <>
          <h1>{ title }</h1>
          {/* <code>{JSON.stringify(newMessage)}</code> */}
          <p> { subTitle }</p>
          <p> { name }</p>
          
      </>
      
      )
  }

  //definiendo las proptypes OJO CON LAS MAYUSCULAS Y MINUSCULAS
// title: PropTypes.string esto valida que sea un string
//isRequired lo define como requerido title: PropTypes.string.isRequired
//para ordenar de manera ascendente las lineas de codigo control+shif+p sort lines ascending
//las propTypes se colocan al final del componente es un  estandar si se coloca al principio da error



  FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
  }

  //Definiendo los props por defecto

  FirstApp.defaultProps ={
    name:'Emerson gonzález',
    subTitle: 'No hay Subtítulo',
    title:'No hay título',
  }