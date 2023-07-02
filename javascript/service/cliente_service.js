const listaProductos = () => fetch("http://localhost:3000/data")
  .then((respuesta) => respuesta.json());

const eliminarProductos = (id) => {
  return fetch(`http://localhost:3000/data/${id}`,
    { method: "delete", })
};

const modificarProducto = (url, categoria, nombre, precio, code, descripcion, id) => {
  return fetch(`http://localhost:3000/data/${id}`,
    {
      method: "PUT",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({ url, categoria, nombre, precio, code, descripcion, id })
    })
    .then(respuesta => respuesta)
    .catch(err => alert("Sucedio un error en la modificacion"))
};

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/data/${id}`).then((respuesta) => respuesta.json())
};

const agregarProducto = (url, categoria, nombre, precio, code, descripcion) => {
  return fetch("http://localhost:3000/data",
    {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ url, categoria, nombre, precio, code, descripcion, id: uuid.v4() })
    })
};

const leerContador = () => {
  return fetch("http://localhost:3000/contador/1")
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      var number = data.number;
      return number;
    })
      .catch(function (error) {
        console.log('Error al cargar el archivo JSON:', error);
      })
};

const modificarContador = (number) => {
  return fetch("http://localhost:3000/contador/1",
    {
      method: "PUT",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({number})
    })
    .then(respuesta => respuesta)
    .catch(err => alert("Sucedio un error en la modificacion" + err))
};

export const clientService = {
  listaProductos,
  eliminarProductos,
  modificarProducto,
  detalleCliente,
  agregarProducto,
  leerContador,
  modificarContador,
}