import { clientService } from "../service/cliente_service.js";

export const saveCounter = (contador) => {
    clientService.modificarContador(contador).then(() => {
    });
}


