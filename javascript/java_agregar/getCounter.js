import { clientService } from "../service/cliente_service.js";

let contador;

clientService.leerContador().then(function(data){
   contador = data;
})

export {contador};