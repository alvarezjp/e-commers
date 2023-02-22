import { checkData } from "./checkData.js";
import { regexEmail } from "./regexEmail.js";

let email;
let password;
let inspectEmail;

let divButton = document.querySelector(".login__form__button");

divButton.addEventListener("click", (evento) => {
    evento.preventDefault();
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    inspectEmail = regexEmail(email);
    let prueba = checkData(email,password);
    if(prueba){
        alert("se activa la pagina");
    }
    
});

divButton.addEventListener("mouseover", (evento2) => {
    if ((evento2.target.classList.contains("login__form__button"))) {
        evento2.target.style.cursor = "pointer";

    } else {
        evento2.target.style.cursor = "default";
    }

});