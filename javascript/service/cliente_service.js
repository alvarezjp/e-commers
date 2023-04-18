const listaProductos = () => fetch("http://localhost:3000/data").then((respuesta) => respuesta.json());

const eliminarProductos = (id) => { return fetch(`http://localhost:3000/data/${id}`, { method: "delete", }) }

const modificarProducto = (url,categoria,nombre, precio, codigo,descripcion,id) => { return fetch(`http://localhost:3000/data/${id}`, { method: "put", headers: { "Content-type": "Application/json" }, body: JSON.stringify({url,categoria,nombre, precio, codigo,descripcion,id}) }).then(respuesta=>respuesta).catch(err=>alert("Sucedio un error en la modificacion")) };

const detalleCliente = (id) =>{
    return fetch(`http://localhost:3000/data/${id}`).then((respuesta) => {respuesta.json()})
  }

export const clientService = {
    listaProductos,
    eliminarProductos,
    modificarProducto,
    detalleCliente,
}