
// Ej 1.1
const boton = document.querySelector("button");

boton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Hola desde consola");
})
//
// Ej 1.2
const enlace = document.querySelector("a");

enlace.addEventListener("mousemove", (event) => {
    event.preventDefault();
    enlace.style.backgroundColor = "red";
})
//
// Ej 1.3
const posicion = document.getElementById("posicion");

document.body.addEventListener("mousemove", (event) => {
  // Coordenadas respecto al navegador
  const navegadorX = event.clientX;
  const navegadorY = event.clientY;

  // Coordenadas respecto a la página (toda la web, incluso si hay scroll)
  const paginaX = event.pageX;
  const paginaY = event.pageY;

  // Mostramos los valores en el párrafo
  posicion.textContent = `Navegador → X: ${navegadorX}, Y: ${navegadorY} | Página → X: ${paginaX}, Y: ${paginaY}`;
});
//