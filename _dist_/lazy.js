
const isIntersecting = (entry) => {
    // 200px lejos de la pantalla haz x o y
    return entry.isIntersecting; // ture (dentro de la pantalla)
};

const loadImage = (entry) => {
    const container = entry.target; // container (DIV)
    // const imagen = container.firstChild;
    const imagen = container.querySelector("img");
    const url = imagen.dataset.src;
    // load image
    imagen.src = url;

    // des registra la imagen (unlisten)
    observer.unobserve(container)
};

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage);
});

// 
export const registerImage = (imagen) => {
    // IntersectionObserver -> observer(imagen)
    observer.observe(imagen)
};