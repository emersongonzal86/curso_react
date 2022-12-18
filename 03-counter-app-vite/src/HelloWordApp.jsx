//exportación del componente
// export function App (){
//     return (<h1>Hola Mundo !!!</h1>);
// }

// export const hola ='123';

//Tambien se encuentra que lo usan asi

// function App (){
//     return (<h1>Hola Mundo !!!</h1>);
// }

// export default App;

//utilizando el shortcut rafc crea automaticamente el componente
// leera el nombre del archivo y asi creara el componente
// ya no vamos a ocupar
//import React from 'react' por eso la borramos
//los dos codigos son iguales
// es recomendado usar Pascalcase
// El shortcut crea div en vez de h1
// hay que agragar ; porque este no lo utiliza
// agregar export para exportar
export const HelloWordApp = () => {
  return (
    <div> Hello Word App </div>
  );
}

export default HelloWordApp
