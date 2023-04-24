import { dataInput } from "./dataInput.js";

const boton = document.querySelector("[data-agregar]");


boton.addEventListener("click",(evento) =>{
    evento.preventDefault();
    dataInput();
})