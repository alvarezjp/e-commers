export const structureSubProduct = (url, nombre, precio,id)=>{
    const linea = document.createElement("div");
    linea.classList.add("product_similary_section")
    const contenido = `
    <div class="gallery__section">
        <img class="gallery__section__img" id="product_similary_img_1" src="${url}" alt="No se pudo cargar imagen">
        <div class="gallery__section__text">
            <p class="gallery__section__text__name" id="product_similary_name_1">${nombre}</p>
            <p class="gallery__section__text__price" id="product_similary_price_1">${precio}</p>
            <a  class="gallery__section__text__link" id="${id}">Ver producto</a>
        </div>
    </div>
    `;
    linea.innerHTML=contenido;
    return linea;
}