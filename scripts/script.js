const showArtworks = (artworks) => {
    // console.log('Cheguei no show products');
    console.log(artworks);

console.log(artworks.length);

 for (let i = 0; i < artworks.length; i++) {
     console.log(artworks[i].artworkName);

        

    let tagDivCard = document.createElement('div');
    tagDivCard.setAttribute('class', 'mb-3 row');
    tagDivCard.setAttribute('style', 'max-width: 1000px;');

    let tagDivCardBody = document.createElement('div');
    tagDivCardBody.setAttribute('class', 'row g-0');
    tagDivCard.appendChild(tagDivCardBody);

    let tagDivImg = document.createElement('div');
    tagDivImg.setAttribute('class', 'col-md-4');
    tagDivImg.appendChild(tagDivCardBody);

    let tagImage = document.createElement('img');
    tagImage.setAttribute('class', 'card-img-top');
    tagImage.setAttribute('src', artworks[i].urlArtwork);
    //tagImage.setAttribute('alt', products[i].name);
    tagDivCard.appendChild(tagDivImg);

    let tagDivDesc = document.createElement('div');
    tagDivDesc.setAttribute('class', 'col-md-8');
    tagDivImg.appendChild(tagDivCardBody);

    let tagDivBody = document.createElement('div');
    tagDivBody.setAttribute('class', 'card-body');
    tagDivImg.appendChild(tagDivBody);

    let tagH5 = document.createElement('h5');
    tagH5.setAttribute('class', 'card-title');

    let textNode = document.createTextNode(artworks[i].artworkName);
    tagH5.appendChild(textNode);
    tagDivBody.appendChild(tagH5);

    
    let tagP = document.createElement('p');
    tagP.setAttribute('class', 'card-text');
    textNode = document.createTextNode(artworks[i].artworkDescription);
    tagP.appendChild(textNode);
    tagDivBody.appendChild(tagP);

    tagP = document.createElement('p');
    tagP.setAttribute('class', 'text-center');
    textNode = document.createTextNode(artworks[i].artistName);
    tagP.appendChild(textNode);
    tagDivBody.appendChild(tagP);

    tagP = document.createElement('p');
    tagP.setAttribute('class', 'text-center');
    textNode = document.createTextNode(artworks[i].date_artwork);
    tagP.appendChild(textNode);
    tagDivBody.appendChild(tagP);

    let tagDivArtworks = document.getElementById('mus_artworks');
    tagDivArtworks.appendChild(tagDivCard);
    

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