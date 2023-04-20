import { clientService } from "../service/cliente_service.js";

const nuevoRecuadro = (url, nombre, precio, codigo, id) => {
    const linea = document.createElement("div");
    linea.className = "gallery__section";
    linea.id = id;
    const contenido = `
                    <div class="gallery__section__img" style="background-image: url( ${url} );">
                        <img src="./img/productos/papelero.svg" alt="Cargando" class="img__dump">
                        <img src="./img/productos/lapiz.svg" alt="Cargando" class="img__pencil">
                    </div>
                    <div class="gallery__section__text">
                        <p class="gallery__section__text__name" data-name-${id}>${nombre}</p>
                        <p class="gallery__section__text__price" data-price-${id}>${precio}</p>
                        <p class="gallery_section__text_code" data-code-${id}>${codigo}</p>
                    </div>
                    `;
    linea.innerHTML = contenido;
    return linea;
}

const table = document.querySelector("[data-gallery]");



clientService.listaProductos().then((data) => {
    data.forEach((product) => {
        const nuevaLinea = nuevoRecuadro(product.url, product.nombre, product.precio, product.code,product.id);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrio un Error "));


