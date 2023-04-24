import { clientService } from "../service/cliente_service.js";
export const loadParameters = (id) => {
    let nombre = document.querySelector(`[data-name-${id}]`).textContent;
    let precio = document.querySelector(`[data-price-${id}]`).textContent;
    let code = document.querySelector(`[data-code-${id}]`).textContent;
    clientService.detalleCliente(id).then((datos) => {

        let url = datos.url;
        let categoria = datos.categoria;
        let descripcion = datos.descripcion;

        clientService.modificarProducto(url,categoria,nombre,precio,code,descripcion,id).then(() => { alert("Producto modificado") });
    });
}
