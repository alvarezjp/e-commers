import { clientService } from "../service/cliente_service.js";
import { categoryCreation } from "./categoryCreation.js";

let documento = document.querySelector("[data-gallery]");

clientService.listaProductos().then(data => {
    const categoria = [...new Set(data.map(producto => producto.categoria))];

    categoria.forEach(data => {
        let newCategory = categoryCreation(data);
        documento.appendChild(newCategory);
    })
})
