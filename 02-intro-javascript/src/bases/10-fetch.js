//Fetch API

const apiKey = 'V0CLkRJ2r29wfnre0B9fqce538nPvVm6';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//promesas en cadena

peticion
    .then(resp=>resp.json())
    .then(({data})=>{
    const {url} = data.images.original
    
    const img =document.createElement('img');
    img.src =url;

    document.body.append(img);
    
    })    
.catch(console.warn);
