import { obtainID } from "./obtainId.js";

export const editProduct = (producto) => {
let idProduct = obtainID(producto);

let txName = document.querySelector(`[data-name-${idProduct}]`);
let txPrice = document.querySelector(`[data-price-${idProduct}]`);
let txCode = document.querySelector(`[data-code-${idProduct}]`);
txName.contentEditable = true;
txPrice.contentEditable = true;
txCode.contentEditable = true;
txName.focus();
txPrice.focus();
txCode.focus();
}


      