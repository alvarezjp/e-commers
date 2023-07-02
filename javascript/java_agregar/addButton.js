
import { incrementCounter } from "./IncrementCounter.js";
import { clientService } from "../service/cliente_service.js";


const form = document.querySelector("[data-form]");




form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    let imgUrl = document.querySelector('[data-url]').value;
    let categoria = document.querySelector('[data-categoria]').value;
    let nombre = document.querySelector('[data-nombre]').value;
    let precio = document.querySelector('[data-precio]').value;
    let descripcion = document.querySelector('[data-descripcion]').value;

    if (form.checkValidity()) {
        let counterValue = incrementCounter();
        clientService.agregarProducto(imgUrl, categoria, nombre, precio,counterValue, descripcion)
            .then(respuesta => { alert("Producto Registrado") })
            .catch(err => console.log(err))
    }  




});








