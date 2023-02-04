

export const obtain = (elemento) => {
    let obtainId = elemento.target.getAttribute("id"); // Me posiciono en el elemento seleccionado y luego obtengo el id con getattribute
    localStorage.setItem("id",obtainId); // utilizamos el almacenamiento local (sharedArrayBuffer) para guardar el dato del ID
}