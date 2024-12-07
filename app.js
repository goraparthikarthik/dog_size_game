let imageElement = document.getElementById("image");
let warningmsgElement = document.getElementById('warningMessage');
let imgwidthElement = document.getElementById('imageWidth');

let defaultImageWidth = 200;

imageElement.style.width = defaultImageWidth + "px";
imgwidthElement.textContent = "200px";

function incrementbutton() {

    if (defaultImageWidth >= 300) {
        warningmsgElement.textContent = "Too big. Decrease the size of the Image";
        warningmsgElement.style.color = "red";
    }
    else {
        defaultImageWidth = defaultImageWidth + 5;
        imageElement.style.width = defaultImageWidth + "px";
        imgwidthElement.textContent = defaultImageWidth + "px";
        warningmsgElement.textContent = "";

    }
}

function decrementbutton() {

    if (defaultImageWidth <= 100) {

        warningmsgElement.textContent = "Can't Visible. Increase the size of the Image";
        warningmsgElement.style.color = "red";
    }
    else {
        defaultImageWidth = defaultImageWidth - 5;
        imageElement.style.width = defaultImageWidth + "px";
        imgwidthElement.textContent = defaultImageWidth + "px";
        warningmsgElement.textContent = "";

    }
}
