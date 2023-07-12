export const structureProduct =(imagen,nombre,precio,id)=>{ 
const linea = document.createElement("div");

const contenido = `
    <div class="gallery__section">
        <img class="gallery__section__img" src="${imagen}"
            alt="No se pudo cargar imagen">
            <div class="gallery__section__text">
                <p class="gallery__section__text__name">${nombre}</p>
                <p class="gallery__section__text__price">${precio}</p>
                <a class="gallery__section__text__link" id="${id}">Ver producto</a>
            </div>
    </div>
`;
linea.innerHTML=contenido;
return linea;
}
