
const ObtenerMemes= async()=>{

    const request = await fetch("https://api.imgflip.com/get_memes")
    const response = await request.json()
    console.log(response)

    //pintar los memes
    const memesConteiners = document.getElementById("list-memes")
    const memeTemplate = document.getElementById("meme")

    //iterar en el array de memes

    response.data.memes.slice(0,8).forEach(meme => {
        const newMemeCard = memeTemplate.cloneNode(true)
        const img = newMemeCard.querySelector("img")
        img.src  = meme.url
        memesConteiners.appendChild(newMemeCard)
        
    });

    memeTemplate.remove()
    
}


    const Obtenergif= async()=>{

        const request = await fetch("https://api.giphy.com/v1/gifs/search?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&q=tralalerotralala")

        const response = await request.json()
        console.log(response.data[0].images.original.url)
    
        //pintar los gif
        const gifsTemplate = document.getElementById("gif")

        gifsTemplate.src = response.data[0].images.original.url

    }


Obtenergif()
ObtenerMemes()