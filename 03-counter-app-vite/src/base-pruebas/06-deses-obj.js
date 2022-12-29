export const usContext = ({ clave, nombre, edad,  lat, lng  }) => {


    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        nombre: nombre,
        latlng: {
            lat: lat,
            lng: lng
        }
    }

}

