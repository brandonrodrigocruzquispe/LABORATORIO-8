export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=tdGD1wpAFI4p5L7JExvmtYBdXFgFTyuT&q=${category}&limit=5`;

    const respuesta = await fetch(url);
    const { data = [] } = await respuesta.json();
    const gifsNuevas = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url,
        };
    })

    return gifsNuevas;
};