const botonTema = document.getElementById("btn-tema");


function aplicarTema(tema) {
    document.body.classList.toggle("oscuro", tema === "oscuro");
    localStorage.setItem("tema", tema);
}

// Al cargar la página, aplica el tema guardado (claro si no hay nada)
aplicarTema(localStorage.getItem("tema") || "claro");

// Solo engancha el clic si la página tiene el botón
if (botonTema) {
    botonTema.addEventListener("click", () => {
        const esOscuro = document.body.classList.contains("oscuro");
        aplicarTema(esOscuro ? "claro" : "oscuro");
    });
}