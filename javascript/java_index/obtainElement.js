// En esta seccion obtengo la direccion de la imagen 

export const obtain = (elemento) => {
    let parent1 = elemento.target.parentElement; // Posicionarnos en el elemento padre
    let parent2 = parent1.parentElement.firstElementChild; // posicionarnos en el hijo del padre del padre 1
    let obtainImg = parent2.getAttribute("src") // obtener la direccion de la imagen que estoy seleccionando.
    alert(obtainImg);
}


