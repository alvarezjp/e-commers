import {obtain} from './obtainElement.js'
// import { prueba } from '../java_verProducto/modification_pag_seeProduct.js';
//Leo la clase de la galeria para poder para poder utilizar la tecnica de delegacion de eventos
let galery = document.querySelector(".gallery");

//Agrego el evento de click y una ves que se realiza el evento leo que tarjeta contenga la clase que yo quiero y asi realizo la accion
galery.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("gallery__section__text__link")) {
        obtain(evento);   
        alert("Se ejecuto el click");
        window.location.href = "http://127.0.0.1:5500/ver_producto.html";
    }
});


//con el evento de si pasa el mause por encima para asi convertir el puntero en una manito sobre el elemento indicado, y que cambie a puntero nuevamente cuando sale de ahi.
galery.addEventListener("mouseover",(evento2)=>{
    if (evento2.target.classList.contains("gallery__section__text__link")){
      evento2.target.style.cursor="pointer";
      
    }else{
        evento2.target.style.cursor="default";
    }
});
