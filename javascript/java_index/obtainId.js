export const obtainId =(evento)=>{
let id = evento.target.id.toString();
localStorage.setItem("productId",id);
}