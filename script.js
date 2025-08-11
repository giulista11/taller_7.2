



const boton = document.getElementById("saludar");
const div = document.getElementById("boton");

boton.addEventListener("click", function(event) {
    event.stopPropagation(); // Evita que el clic se propague al div
    alert("Holaa");
});

div.addEventListener("click", function() {
    alert("Hola, soy el div.");
});