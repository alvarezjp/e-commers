import { clientService } from "../service/cliente_service.js";
import { categoryCreation } from "./categoryCreation.js";
import { structureProduct } from "./structureProduct.js";

let documento = document.querySelector("[data-gallery]");

clientService.listaProductos().then(data => {
    const categoria = [...new Set(data.map(producto => producto.categoria))];

    categoria.forEach(data => {
        let DataTransform = data.replace(/_/g, " ").replace(/\b\w/g, function (match) {
            return match.toUpperCase();
        });
        let newCategory = categoryCreation(data, DataTransform);
        documento.appendChild(newCategory);


    })
})

clientService.listaProductos().then(data => {
    
    const categoria = [...new Set(data.map(producto => producto.categoria))];
    categoria.forEach(category => {
        
        data.forEach(product =>{
            
            if( (category == product.categoria) ){
                const docu = document.querySelector(`[data-box-${category}]`)
                const newProduct=structureProduct(product.url,product.nombre,product.precio);
                docu.appendChild(newProduct);
                // // console.log(product.categoria, category,product.id)
            }
        })
    })
   
    

    
   

    
})
