import { getData, getCategory } from "../java_agregar/InfoProductos.js";

window.addEventListener("load", function () {
    let inputId = this.localStorage.getItem("id"); // Obtengo el ID de la memoria local
    let contador = 0;  // Contador necesario obtener el indice que contiene todo los elementos de la misma categoria que el producto seleccionado
    let category = getCategory(inputId);  // Se guarda esta funcion en una variable para una mejor lectura en el resto del codigo

    document.getElementById("linkImg").setAttribute("src", getData(inputId).url);
    document.getElementById("nameProduct").innerHTML = getData(inputId).nombre;
    document.getElementById("priceProduct").innerHTML = getData(inputId).precio;
    document.getElementById("descriptionProduct").innerHTML = getData(inputId).descripcion;

    for (let i = 1; i <= getCategory(inputId).length; i++) {
        document.getElementById("product_similary_img_" + i).setAttribute("src", getData(category[contador]).url);
        document.getElementById("product_similary_name_" + i).innerHTML = getData(category[contador]).nombre;
        document.getElementById("product_similary_price_" + i).innerHTML = getData(category[contador]).precio;
        document.querySelector(`a[data-product="N${i}"]`).setAttribute("id", category[contador])
        contador++;
    }
})

