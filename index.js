const inputNombre = document.getElementById("nombre-input");
const botonContinuar = document.getElementById("continuar-btn");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // evita que la página se recargue

    const nombre = inputNombre.value.trim();
    localStorage.setItem("nombre", nombre);
    window.location.href = "menu/menu.html";
});