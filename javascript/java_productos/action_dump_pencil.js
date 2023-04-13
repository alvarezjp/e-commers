import { deleteProduct } from "./delete.js";

// import { deleteElement } from "./deleteElement.js";
let galery = document.querySelector(".gallery__box");
let txPrice = document.querySelector("[data-price-1]");
let txCode = document.querySelector("[data-code-1]");



//Agrego el evento de click y una ves que se realiza el evento leo que tarjeta contenga la clase que yo quiero y asi realizo la accion
galery.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("img__dump")) {
        deleteProduct(evento);


    }
    if (evento.target.classList.contains("img__pencil")) {
        alert("funciona el lapiz");
        let txName = document.querySelector("[data-name-1");
        let txPrice = document.querySelector("[data-price-1]");
        let txCode = document.querySelector("[data-code-1]");
        txName.contentEditable = true;
        txPrice.contentEditable = true;
        txCode.contentEditable = true;
        txName.focus();
        txPrice.focus();
        txCode.focus();

    }

});


//con el evento de si pasa el mause por encima para asi convertir el puntero en una manito sobre el elemento indicado, y que cambie a puntero nuevamente cuando sale de ahi.
galery.addEventListener("mouseover", (evento2) => {
    if ((evento2.target.classList.contains("img__dump")) || (evento2.target.classList.contains("img__pencil"))) {
        evento2.target.style.cursor = "pointer";

    } else {
        evento2.target.style.cursor = "default";
    }
});