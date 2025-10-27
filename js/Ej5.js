const miEvento = new CustomEvent("miEvento", {
    detail: { mensaje: "¡Se ha disparado miEvento!" } // opcional
});

const boton = document.getElementById("miBoton");

boton.addEventListener("miEvento", (e) => {
    alert("Evento personalizado detectado: " + e.detail.mensaje);
});

boton.addEventListener("click", () => {
    boton.dispatchEvent(miEvento);
});