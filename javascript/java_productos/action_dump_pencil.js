import { obtainID } from "./obtainId.js";

// import { deleteElement } from "./deleteElement.js";
let galery = document.querySelector(".gallery__box");
let txName = document.querySelector("#txName1");
let txPrice = document.querySelector("#txPrice1");
let txCode = document.querySelector("#txCode1");



//Agrego el evento de click y una ves que se realiza el evento leo que tarjeta contenga la clase que yo quiero y asi realizo la accion
galery.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("img__dump")) {
        obtainID(evento);
        
        alert("funciona aun");
        
    }
    if (evento.target.classList.contains("img__pencil")) {
        alert("funciona el lapiz");
        txName.contentEditable=true;
        txPrice.contentEditable=true;
        txCode.contentEditable=true;

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