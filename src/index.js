import { registerImage } from "./lazy";

/*
1. HTML (imagenes)
2. imagenes html -> js
2.1 imagenes aleatorias
3. eventos -> dom -> agregar imagenes
4. intersection Observer
5. Aplicar lazy loading a las imagenes
*/

const minimum = 1;
const maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;


// Crear (1) imagen
const createImageNode = () => {
    const container = document.createElement('div') 
    container.className = 'p-4'

    const imagen = document.createElement('img');
    imagen.className = 'mx-auto';
    imagen.width = '320';
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; //to do


    const imageWrapper = document.createElement("div");
    imageWrapper.className = "bg-gray-300";
    imageWrapper.style.minHeight = "100px";
    imageWrapper.style.display = "inline-block";

    imageWrapper.appendChild(imagen);
    container.appendChild(imageWrapper);

    return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById('images')

// Agregar al contenedor #imagen
const addButton = document.getElementById('add');
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};

addButton.addEventListener('click', addImage);
// mountNode.append(nuevaImagen);


// Eliminar imagenes del contenedor
const cleanButton = document.getElementById('clean')

const cleanImages = () => {
    [...mountNode.childNodes].forEach(child => {
        child.remove();
    }) 
}

cleanButton.addEventListener("click", cleanImages)