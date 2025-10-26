const botonEnviar = document.querySelector("button");
const inpNombre = document.getElementById("nombre");
const inpEmail = document.getElementById("correo");
botonEnviar.addEventListener("click", (event)=>{
    event.preventDefault();
    if(inpNombre.value.trim() == "" || inpEmail.value.trim() == "" ){
        alert("Error");
    }else{
        alert("Exito");
    }
})