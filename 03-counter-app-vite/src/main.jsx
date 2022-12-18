import React from 'react';
import ReactDOM from 'react-dom/client';

//Esta es mi aplicación
// Los componentes usualmente no estan en el archvo main esto es solo 
//para el ejemplo

function App (){
    return (<h1>Hola Mundo !!!!!</h1>);
}

//Aca vamos a renderizar la aplicación

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);