import { getData, getCategory} from "../java_agregar/InfoProductos.js";

window.addEventListener("load", function () {
    let inputId = this.localStorage.getItem("id");
    let contador = 0;
    let category = getCategory(inputId);

    document.getElementById("linkImg").setAttribute("src", getData(inputId).url);  // aqui debemos modificar solo el ID para que cambie segun la info

    document.getElementById("nameProduct").innerHTML = getData(inputId).nombre; // Nombre

    document.getElementById("priceProduct").innerHTML = getData(inputId).precio;

    document.getElementById("descriptionProduct").innerHTML = getData(inputId).descripcion;

    for (let i=1; i <= getCategory(inputId).length; i++) {

        document.getElementById("product_similary_img_"+i).setAttribute("src", getData(category[contador]).url);
        document.getElementById("product_similary_name_"+i).innerHTML = getData(category[contador]).nombre;
        document.getElementById("product_similary_price_"+i).innerHTML = getData(category[contador]).precio;
        document.querySelector(`a[data-product="N${i}"]`).setAttribute("id",category[contador])
        console.log(category[contador]);
        contador++;
    }


})

