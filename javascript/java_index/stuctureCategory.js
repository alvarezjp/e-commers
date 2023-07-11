export const structureCategory=(categoria,titulo)=>{
 const linea = document.createElement("div");
 linea.setAttribute(`data-${categoria}`,``);

 const contenido = `
     <div class="gallery__title">
         <h1>${titulo}</h1>
         <a class="gallery__title__text">Ver todo</a>
     </div>
     <div class="gallery__box" data-box-${categoria}>
     </div>
 `;
linea.innerHTML=contenido;
return linea;
}

