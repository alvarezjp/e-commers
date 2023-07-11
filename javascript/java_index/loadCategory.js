import { clientService } from "../service/cliente_service.js";
import { structureCategory } from "./stuctureCategory.js";

export const loadCategory = () => {
    let documento = document.querySelector("[data-gallery]");
    clientService.listaProductos().then(data => {
        const categoria = [...new Set(data.map(producto => producto.categoria))];
        categoria.forEach(data => {
            let DataTransform = data.replace(/_/g, " ").replace(/\b\w/g, function (match) {
                return match.toUpperCase();
            });
            let newCategory = structureCategory(data, DataTransform);
            documento.appendChild(newCategory);
        })
    })
}
