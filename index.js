const inputNombre = document.getElementById("nombre-input");
const botonContinuar = document.getElementById("continuar-btn");

botonContinuar.onclick = () => {
    const nombre = inputNombre.value; // LEE lo que el usuario tipeó
    localStorage.setItem("nombreCliente", nombre);
    window.location.href = "menu/menu.html";
};

console.log("hola ")