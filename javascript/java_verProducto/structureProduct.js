export const structureProduct = (url, nombre, precio, descripcion)=>{
    const linea = document.createElement("div");
    linea.classList.add("product_display")
    const contenido = `
    <div class="product_cont_img">
    <img class="product_img" src="${url}" alt="Imagen no encontrada" id="linkImg">
    </div>    
    <div class="product_info">
        <h1 class="product_titule" id="nameProduct">${nombre}</h1> <!-- cambiar nombre -->
        <p class="produt_price" id="priceProduct"> ${precio}</p> <!-- cambiar precio --> 
        <p class="produt_description" id="descriptionProduct">${descripcion}.</p> 
    </div>
    `;
    linea.innerHTML=contenido;
    return linea;
}

