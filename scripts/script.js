const showArtworks = (artworks) => {
    // console.log('Cheguei no show products');
    console.log(artworks);

console.log(artworks.length);

 for (let i = 0; i < artworks.length; i++) {
     console.log(artworks[i].artworkName);

        

    let tagDivCard = document.createElement('div');
    tagDivCard.setAttribute('class', 'mb-3 row');
    tagDivCard.setAttribute('style', 'max-width: 1000px;');

    

    }
}

const fetchArtworks = () => {
    console.log("Cheguei na script para carregar as obras de arte");
    //Carrega os produtos do banco de dados. 
    //Endereço da api http://localhost:8000/GetProducts.php
    fetch('http://localhost:8000/getArtworks.php')
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json()
            }
            throw new Error(response.statusText);
        })
        .then((artworks) => {
            showArtworks(artworks);
        })
        .catch((error) => {
            console.log(error);
        });
}