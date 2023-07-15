// import { obtain } from "../java_index/obtainElement.js";

//Leo la clase de productos_similares para poder utilizar la tecnica de delegacion de eventos
let subCategory = document.querySelector(".product_similary_section");

//Agrego el evento de click y una ves que se realiza el evento leo el contenido de la tarjeta para ver la clase y asi ejecutar una accion.
subCategory.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("gallery__section__text__link")) {
        // obtain(evento);
        window.open("http://127.0.0.1:5500/ver_producto.html");
    }
});

//Evento de pasar el mause por encima. Para convertir el puntero en una manito sobre el elemento indicado, y que cambie a puntero nuevamente cuando sale de ahi.
subCategory.addEventListener("mouseover", (evento2) => {
    if (evento2.target.classList.contains("gallery__section__text__link")) {
        evento2.target.style.cursor = "pointer";
    } else {
        evento2.target.style.cursor = "default";
    }
});