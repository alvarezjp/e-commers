export const deleteElement = (idElement) => {
    const divDelete = document.getElementById(idElement);
    divDelete.remove();
    alert("El elemento "+idElement+" fue borrado");
}