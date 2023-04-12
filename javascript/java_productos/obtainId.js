export const obtainID = (elemento)=>{
    let fatherDiv = elemento.target.parentNode.parentNode;
    return alert("Se elimino el ID: "+fatherDiv.getAttribute("id"));
}