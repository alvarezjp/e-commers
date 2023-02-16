import { getData, getCategory, updateProductSimilary } from "../java_agregar/InfoProductos.js";

window.addEventListener("load", function () {
    let inputId = this.localStorage.getItem("id");
    let contador =0;
    let esto = getCategory(inputId);
    let eso = getData(esto.at(contador));
    
    document.getElementById("linkImg").setAttribute("src", getData(inputId).url);  // aqui debemos modificar solo el ID para que cambie segun la info

    document.getElementById("nameProduct").innerHTML = getData(inputId).nombre; // Nombre

    document.getElementById("priceProduct").innerHTML = getData(inputId).precio;

    document.getElementById("descriptionProduct").innerHTML = getData(inputId).descripcion;

    for (let i=1; i < getCategory(inputId).length; i++) {

        document.getElementById("product_similary_img_"+i).setAttribute("src", eso.url);
        console.log(getData(getCategory(inputId)[1]).url)
        contador++;
    }


})

