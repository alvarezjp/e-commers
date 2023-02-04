import { infoDatos } from "../java_agregar/InfoProductos.js";

window.addEventListener("load", function () {
    let algo = this.localStorage.getItem("id");

    document.getElementById("linkImg").setAttribute("src", infoDatos(algo).url);  // aqui debemos modificar solo el ID para que cambie segun la info

    document.getElementById("nameProduct").innerHTML = infoDatos(algo).nombre; // Nombre

    document.getElementById("priceProduct").innerHTML = infoDatos(algo).precio;

    document.getElementById("descriptionProduct").innerHTML = infoDatos(algo).descripcion;
})

