import { clientService } from "../service/cliente_service.js";
export const incrementCounter = () => {
    clientService.leerContador().then(function (data) {        
        clientService.modificarContador(data+1).then(() => { 
        });
    });
}