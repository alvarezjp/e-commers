export const categoryCreation=(categoria)=>{
 const linea = document.createElement("div");
 linea.setAttribute(`data-${categoria}`,``);

 const contenido = `
     <div class="gallery__title">
         <h1>${categoria}</h1>
         <a class="gallery__title__text">Ver todo</a>
     </div>
 `;
linea.innerHTML=contenido;
return linea;
}

