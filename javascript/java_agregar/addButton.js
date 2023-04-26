import { dataVerification } from "./dataVerification.js";
import { dataInput } from "./dataInput.js";
import { loadData } from "./loadData.js";


const boton = document.querySelector("[data-agregar]");


boton.addEventListener("click",(evento) =>{
    evento.preventDefault();
    let datos = dataInput();
    let check = dataVerification(datos);
    loadData(check,datos);

})