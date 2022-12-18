import React from 'react';
import ReactDOM from 'react-dom/client';
//autoimportado a tenet encuenta desestructurar
//si en el componente no existe un export default
import {FirstApp} from './FirstApp';
//autoimportado
import HelloWordApp from './HelloWordApp';

//importación de componente cuando solo es uno
//import moduleName from './HelloWordApp'

//importacion de componentes cuando se exportan varios en el mismo archivo
//De esta manera la vamos a usar
//import {App,hola} from './HelloWordApp'

//cuando se exporta con export default se escribe asi

//import App from './HelloWordApp';
//el nombre que se coloca al modulo 
//es el que se utiliza en la renderización
//<App /> si se cambia el nombre hay que cambiarlo en la renderización

//cuando en el componente usamos el shortcut rafc
//podemos escribir el nombre del componente y se autoimporta
//HelloWordApp
//debe borrarse el texto del nombre del componente

//Aca vamos a renderizar la aplicación


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        
        <FirstApp />
    </React.StrictMode>
);