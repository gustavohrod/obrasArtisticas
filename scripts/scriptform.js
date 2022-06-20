const checkForm = {
    inputName: false,
    inputArtist: false,
    description: false,
    inputDate: false,
    inputUrl: false,
}

document.getElementById('inputName').addEventListener('input', function (e) {
    console.log(checkForm);
    const inputName = e.target.value;
    if (inputName.length > 100) {
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
    if (inputArtist.length > 60) {
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
    if (description.length > 300 || description.length < 5) {
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
    console.log('Monitorando o ano dao bra');
    const inputDate = e.target.value;
    if (isNaN(inputDate)) {
        document.getElementById('date-error').style.display = 'block';
        checkForm.inputDate = false;

    } else {
        document.getElementById('date-error').style.display = 'none';
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
        checkForm.inputDate &&
        checkForm.inputUrl) {
        butcad.disabled = false;
        window.location.replace='index.html';
    } else {
        butcad.disabled = true;
    }
}
