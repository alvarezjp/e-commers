
import { incrementCounter } from "./IncrementCounter.js";
import { clientService } from "../service/cliente_service.js";


const form = document.querySelector("[data-form]");
let pag = document.querySelector(".add__product");



form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    let imgUrl = "./img/" + (document.querySelector('[data-url]').value);
    let categoria = document.querySelector('[data-categoria]').value;
    let nombre = document.querySelector('[data-nombre]').value;
    let precio = parseFloat(document.querySelector('[data-precio]').value);
    let descripcion = document.querySelector('[data-descripcion]').value;
   



    if (!isNaN(precio)) {
        var precioFormat = precio.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP"
        });
    }


    if (form.checkValidity()) {
        incrementCounter();
        clientService.leerContador().then(data => {
            let contador = "#" + data;
            clientService.agregarProducto(imgUrl, categoria, nombre, precioFormat, contador, descripcion)
                .then(respuesta => { alert("Producto Registrado") })
                .catch(err => console.log(err))
        })
    }
});

pag.addEventListener("mouseover", (evento2) => {
    if (evento2.target.classList.contains("product__form_button")) {
        evento2.target.style.cursor = "pointer";

    } else {
        evento2.target.style.cursor = "default";
    }
});






