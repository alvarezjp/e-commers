import { clientService } from "../service/cliente_service.js";
import { obtainID } from "./obtainId.js";

export const deleteProduct = (id) =>{
    clientService.EliminarProductos(obtainID(id)).then(respuesta => {alert("Se elimino el pruducto ID: "+ obtainID(id));}).catch((err)=>alert("ocurrio un problema"))
    
}