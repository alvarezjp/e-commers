import { obtainID } from "./obtainId.js";
import { editProduct } from "./editProduct.js";

export const blockId = (producto) => {
    let contador;
    let selection2 = 0;
    const selection1 = obtainID( producto);
    if (contador === 0) {
        selection2 = obtainID(producto);
        contador++;
        editProduct(producto);
    }
    else if (selection1 == selection2){
        contador = 0;
    };

    return (console.log(selection1 +" <---> "+ selection2 +" <---> "+ contador));

}