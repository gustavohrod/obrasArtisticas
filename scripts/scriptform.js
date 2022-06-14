const checkForm = {
    inputName: false,
    inputArtist: false,
    description: false,
    //inputDate: false,
    inputUrl: false,
}

document.getElementById('inputName').addEventListener('input', function (e) {
    console.log(checkForm);
    const inputName = e.target.value;
    if (inputName.length > 50) {
        console.log('O nome do produto deve ter no máximo 50 caracteres');
        document.getElementById('name-error').style.display = "block";
        checkForm.inputName = false;
    } else {
        document.getElementById('name-error').style.display = "none";
        checkForm.inputName = true;
    }
    enableButton();
});

document.getElementById('inputArtist').addEventListener('input', function (e) {
    console.log(checkForm);
    const inputArtist = e.target.value;
    if (inputArtist.length > 50) {
        console.log('O nome do produto deve ter no máximo 50 caracteres');
        document.getElementById('artist-error').style.display = "block";
        checkForm.inputArtist = false;
    } else {
        document.getElementById('artist-error').style.display = "none";
        checkForm.inputArtist = true;
    }
    enableButton();
});

document.getElementById('description').addEventListener('input', function (e) {
    const description = e.target.value;
    if (description.length > 200 || productDescription.length < 5) {
        console.log('A descrição do produto deve ter entre 5 e 200 caracteres');
        document.getElementById('description-error').style.display = "block";
        checkForm.description = false;
    } else {
        document.getElementById('description-error').style.display = "none";
        checkForm.description = true;
    }
    enableButton();
});

document.getElementById('inputDate').addEventListener('input', function (e) {
    console.log('Monitorando o preÃ§o do produto');
    const inputDate = e.target.value;
    if (!isset(inputDate)) {
        document.getElementById('productprice-error').style.display = 'block';
        checkForm.inputDate = false;

    } else {
        document.getElementById('productprice-error').style.display = 'none';
        checkForm.inputDate = true;

    }
    enableButton();
});

document.getElementById('inputUrl').addEventListener('input', function (e) {
    console.log('Monitorando url');
    const inputUrl = e.target.value;
    console.log(inputUrl);
    if (validURL(inputUrl)) {
        console.log('A imagem deve ser uma url');
        document.getElementById('url-error').style.display = 'block';
        checkForm.inputUrl = false;
    } else {
        document.getElementById('url-error').style.display = 'none';
        checkForm.inputUrl = true;
    }
    enableButton();
});

function validURL(str) {
    let pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !pattern.test(str);
}

function enableButton() {
    const butcad = document.getElementById("butcad");
    if (checkForm.inputName &&
        checkForm.inputArtist &&
        checkForm.description &&
        checkForm.false) {
        butcad.disabled = false;
    } else {
        butcad.disabled = true;
    }
}