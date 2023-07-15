import { obtainId } from "../java_index/obtainID.js";
let subCategory = document.querySelector(".product_similary_section");

subCategory.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("gallery__section__text__link")) {
        obtainId(evento);
        window.open("http://127.0.0.1:5500/ver_producto.html");
    }
});

subCategory.addEventListener("mouseover", (evento2) => {
    if (evento2.target.classList.contains("gallery__section__text__link")) {
        evento2.target.style.cursor = "pointer";
    } else {
        evento2.target.style.cursor = "default";
    }
});