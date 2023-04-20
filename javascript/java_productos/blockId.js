import { obtainID } from "./obtainId.js";
import { activateEdition } from "./activateEdition.js";
import { deactivateEdition } from "./deactivateEdition.js";
import { loadParameters } from "./loadParameters.js";

let contador = 0;
let elemento1, elemento2;
export const blockId = (producto) => {
    elemento2 = obtainID(producto);
    if (contador == 0) {
        elemento1 = obtainID(producto);
        contador++;
        activateEdition(producto);

    } else if ((contador == 1) && (elemento1 == elemento2)) {
        deactivateEdition(producto);
        loadParameters(elemento2);
        contador = 0;

    } else { alert(" no puede modificar otro elemento sin antes terminar el ID: " + elemento1) }

}