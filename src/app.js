let contador = 1;

function suma(a, b) {
  return a + b;
}

console.log('App lista');

function agregarItem(texto) {
  const lista = document.getElementById('lista');
  if (!lista) return;

  const li = document.createElement('li');
  li.textContent = `${contador}. ${texto}`;
  lista.appendChild(li);
  contador++;
}

const boton = document.getElementById('btn-agregar');
if (boton) {
  boton.addEventListener('click', () => {
    agregarItem('Nuevo ítem');
  });
}

if (typeof module !== 'undefined') {
  module.exports = { suma };
}
