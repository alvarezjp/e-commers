export const obtainID = (elemento)=>{
    let fatherDiv = elemento.target.parentNode.parentNode;
    return fatherDiv.getAttribute("id");
}