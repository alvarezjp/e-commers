import { clientService } from "../service/cliente_service.js";
import { codigo } from "./numberCode.js";

const boton = document.querySelector("[data-agregar]");


boton.addEventListener("click", (evento) => {

    let imgUrl = document.querySelector('[data-url]').value;
    let categoria = document.querySelector('[data-categoria]').value;
    let nombre = document.querySelector('[data-nombre]').value;
    let precio = document.querySelector('[data-precio]').value;
    let descripcion = document.querySelector('[data-descripcion]').value;
    let algoMas = codigo();
    evento.preventDefault();
    clientService.agregarProducto(imgUrl, categoria, nombre, precio, algoMas.toString, descripcion)
        .then(respuesta => { console.log(respuesta) })
        .catch(err => console.log(err))

})