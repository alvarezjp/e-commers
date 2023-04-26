import { clientService } from "../service/cliente_service";
export const loadData = (verification, datos) => {
    if (verification) {
        console.log("se cargaran los datos:");
        const url = datos.url;
        const categoria = datos.categoria;
        const product =  datos.product;
        const price = datos.price;
        const description = datos.description;
        console.log(url,categoria,product,price,description);
    } else {
        console.log("no se cargaron los datos");
    }

}