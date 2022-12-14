//Promise --- Promesas

import  {getHeroeById}  from './bases/08-imp-exp';

/*const promesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
//tarea
//importar
const heroe = getHeroeById(2);
//console.log(heroe);

        //console.log('2 segundos después')
        resolve(heroe);
       // reject('No se pudo encontrar el heroe')
    },2000)
});

promesa.then((heroe)=>{
    //console.log('Then de la promesa')
    console.log('heroe', heroe)
})
.catch(err=>console.warn(err));*/

//vamos a crear una promesa y pasarle el argumento del heroe que necesito buscar

const getHeroeByIdAsync = (id)=>{

    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
    //tarea
    //importar
    const heroe = getHeroeById(id);
    //console.log(heroe);
    
            //console.log('2 segundos después')
            if(heroe){
                resolve(heroe);
            }
            else {
                 reject('No se pudo encontrar el heroe')
            }
           
        },2000)
    });
}

getHeroeByIdAsync(2).then(console.log)
                    .catch(console.warn)    