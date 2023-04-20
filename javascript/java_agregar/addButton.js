const boton = document.querySelector("[data-agregar]");


boton.addEventListener("click",(evento) =>{
    let also = document.querySelector('[data-url]').textContent;
    evento.preventDefault();
    console.log("el texto es: " + also);
})