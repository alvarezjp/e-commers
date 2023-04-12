const listaProductos = () => fetch("http://localhost:3000/data").then((respuesta) => respuesta.json());

const EliminarProductos = (id) => {return fetch (`http://localhost:3000/data/${id}`,{ method: "delete",})} 



    export const clientService = {
        listaProductos,
        EliminarProductos,
    }