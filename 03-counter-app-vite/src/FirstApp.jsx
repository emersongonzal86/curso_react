//PropTypes
/*para usra prop-types en vite debe instalarse manualmente usando el comando yarn add prop-types
se importa mediante import PropTypes from 'prop-types'; OJO CON LAS MAYUSCULAS Y MINUSCULAS*/

/*

*/
import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle}) => {

    //console.log(props);
    
    return (
      <>
      <h1>{ title }</h1>
          {/* <code>{JSON.stringify(newMessage)}</code> */}
          <p> { subTitle }</p>
          
      </>
      
      )
  }

  //definiendo las proptypes OJO CON LAS MAYUSCULAS Y MINUSCULAS
// title: PropTypes.string esto valida que sea un string
//isRequired lo define como requerido title: PropTypes.string.isRequired


  FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
  }