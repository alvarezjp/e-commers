import { obtainID } from "./obtainId.js";

export const activateEdition = (producto) => {
alert("Ahora puede modificar el texto de los recuadros en negro");
let idProduct = obtainID(producto);
let txName = document.querySelector(`[data-name-${idProduct}]`);
let txPrice = document.querySelector(`[data-price-${idProduct}]`);
let txCode = document.querySelector(`[data-code-${idProduct}]`);
txName.contentEditable = true;
txPrice.contentEditable = true;
txCode.contentEditable = true;
txName.style.border="1px dotted black ";
txPrice.style.border="1px dotted black";
txCode.style.border="1px dotted black";
txName.focus();
}


      