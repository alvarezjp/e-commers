export const dataInput = () => {
    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nameProduct = document.querySelector("[data-nombre]").value;
    const price = document.querySelector("[data-precio]").value;
    const description = document.querySelector("[data-descripcion]").value;

    return console.log(url+"---"+categoria+"---"+nameProduct+"---"+price+"---"+description);
}