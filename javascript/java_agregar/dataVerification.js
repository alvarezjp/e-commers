let contador = 0;
let verificador = true;
export const dataVerification = (datos) => {
    for (const valor in datos) {
        if (!datos[valor]) {
            contador++;
        }
    }
    if (contador != 0) {
        verificador = false;
        contador = 0;
    } else {
        // console.log("Datos cargados");
        verificador = true;
    }
    return verificador;
}