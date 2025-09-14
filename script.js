// buscar el boton y el parrafo
const boton = document.getElementById("mi boton");
const mensaje = document.getElementById("mensaje");

//evento de click
boton.addEventListener("click", function() {
    mensaje.textContent = "puedes comprar una porcion de papas 🥺​";
});