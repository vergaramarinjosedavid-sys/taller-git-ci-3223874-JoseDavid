function suma(a, b) {
  return a + b;
}

console.log("App lista");

// Función para agregar un item a la lista
function agregarItem(texto) {
  const lista = document.getElementById("lista");
  if (!lista) return;

  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
}

const boton = document.getElementById("btn-agregar");
if (boton) {
  boton.addEventListener("click", () => {
    agregarItem("Nuevo ítem");
  });
}

if (typeof module !== "undefined") {
  module.exports = { suma };
}
