const listaProductos = () => fetch("http://localhost:3000/data").then((respuesta)=> respuesta.json());

export const clientService ={
    listaProductos,
}