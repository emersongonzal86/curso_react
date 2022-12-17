//Async -- Await
const getImage= async()=>{

try {
    const apiKey = 'V0CLkRJ2r29wfnre0B9fqce538nPvVm6';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const {url} = data.images.original

    const img =document.createElement('img');
    img.src =url;

    document.body.append(img);
} catch (error) {
    //manejo del error
    console.error(error)
}

}

getImage();