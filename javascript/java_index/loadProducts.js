import { structureProduct } from "./structureProduct.js";
import { clientService } from "../service/cliente_service.js";

export const loadProducts = () =>{
    clientService.listaProductos().then(data => {
        const categoria = [...new Set(data.map(producto => producto.categoria))];
        categoria.forEach(category => {            
            data.forEach(product =>{                
                if( (category == product.categoria) ){
                    const docu = document.querySelector(`[data-box-${category}]`)
                    const newProduct=structureProduct(product.url,product.nombre,product.precio);
                    docu.appendChild(newProduct);
                }
            })
        })    
    })
}