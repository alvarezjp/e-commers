import { clientService } from "../service/cliente_service.js";
import { structureProduct } from "./structureProduct.js";
import { structureSubProduct } from "./structureSubProduct.js";

window.addEventListener("load", function () {
let idProduct = localStorage.getItem("productId");

clientService.detalleCliente(idProduct).then(principalProduct => {
    const docuProduct = document.querySelector(".product_principal");
    const productDisplay = structureProduct(principalProduct.url, principalProduct.nombre, principalProduct.precio, principalProduct.descripcion);
    docuProduct.appendChild(productDisplay);
    const categoria = principalProduct.categoria;
    clientService.listaProductos().then(subProductos => {
        const docuSubProduct = document.querySelector(".product_similary_section");
        subProductos.forEach(productos => {
            if ((productos.categoria == categoria)&&(productos.id != idProduct)) {
                const subProduct = structureSubProduct(productos.url,productos.nombre,productos.precio,productos.id);
                docuSubProduct.appendChild(subProduct);
            }
        });
    });
});
});
