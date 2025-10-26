//Ej 3.1
const lista = document.getElementById("lista");

lista.addEventListener("click", (event)=>{
    event.preventDefault();
    console.log("Has hecho clic en:", event.target.textContent);
})
// Ej 3.2
const lista2 = document.getElementById("lista");

lista.addEventListener("click", (event)=>{
    event.preventDefault();
    let nivel = 0;
    let nodoActual = event.target;
    while(nodoActual.parentElement){
        nivel++;
        nodoActual = nodoActual.parentElement;
    }
    console.log("Nivel: " + nivel);
})
//