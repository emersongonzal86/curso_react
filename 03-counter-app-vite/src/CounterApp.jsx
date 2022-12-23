import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {

    //console.log(props);
    
    return (
      <>
      <h1>Counter App</h1>
         
          <p> { value }</p>
          
          
      </>
      
      )
  }

  CounterApp.propTypes ={
    value: PropTypes.number.isRequired,
    
  }