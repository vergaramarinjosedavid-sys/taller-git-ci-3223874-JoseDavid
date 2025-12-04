let contador = 1;

function suma(a, b) {
  return a + b;
}

console.log('App lista');

// Función para agregar un item a la lista (solo en el navegador)
function agregarItem(texto) {
  if (typeof document === 'undefined') {
    // Si estamos en Node (tests), no hacemos nada con el DOM
    return;
  }

  const lista = document.getElementById('lista');
  if (!lista) return;

  const li = document.createElement('li');
  li.textContent = `${contador}. ${texto}`;
  lista.appendChild(li);
  contador++;
}

// Este código solo se ejecuta en el navegador
if (typeof document !== 'undefined') {
  const boton = document.getElementById('btn-agregar');
  if (boton) {
    boton.addEventListener('click', () => {
      agregarItem('Nuevo ítem');
    });
  }
}

// Exportar solo lo que necesitan los tests en Node
if (typeof module !== 'undefined') {
  module.exports = { suma };
}
