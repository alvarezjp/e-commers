import { obtainID } from "./obtainId.js";

export const deactivateEdition = (producto) => {
    let idProduct = obtainID(producto);
    let txName = document.querySelector(`[data-name-${idProduct}]`);
    let txPrice = document.querySelector(`[data-price-${idProduct}]`);
    let txCode = document.querySelector(`[data-code-${idProduct}]`);
    txName.contentEditable = false;
    txPrice.contentEditable = false;
    txCode.contentEditable = false;
    txName.style.border = "none";
    txPrice.style.border = "none";
    txCode.style.border = "none"; 

}