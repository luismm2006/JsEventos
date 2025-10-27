const botonEnviar = document.querySelector("button");
const inpNombre = document.getElementById("nombre");
const inpEmail = document.getElementById("correo");
botonEnviar.addEventListener("click", (event)=>{
    event.preventDefault();
    if(inpNombre.value.trim() == "" || inpEmail.value.trim() == "" ){
        alert("Error");
    }else{
        const eventForm = new CustomEvent("formularioEnviado", {
            detail:{
                nombre: inpNombre.value,
                correo: inpEmail.value,
            }
        });
        document.dispatchEvent(eventForm);

    }
})
document.addEventListener("formularioEnviado", (e) => {
    console.log("Evento personalizado 'formularioEnviado' detectado:");
    console.log("Nombre:", e.detail.nombre);
    console.log("Correo:", e.detail.correo);
});

