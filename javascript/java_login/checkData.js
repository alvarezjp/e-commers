import { clientService } from "../service/cliente_service.js";
import { accessPag } from "./accessPag.js";

export function checkData(inputEmail, inputPassword, inspectEmail) {
    if (inspectEmail) {
        clientService.user().then(data => {
            let verification = true;
            data.forEach(loadData => {
                if ((loadData.email === inputEmail) && (loadData.password === inputPassword)) {
                    accessPag();
                    verification = false;
                }
            });
            if (verification) {
                alert("Usuario o Contraseñas incorrectos, favor revisar los datos ingresados");
            };
        })
    } else {
        alert("Error al escribir el email");
    }
}