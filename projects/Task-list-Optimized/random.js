  let ultimoNumero = Math.floor(Math.random() * 2) + 0;
export function random(min, max) {
  // Genera un número entero aleatorio en el rango [min, max]
  const rango = max - min + 1;

  const nuevoNumero = Math.floor(Math.random() * rango) + min;

  // Ajusta la probabilidad de 0 o 1 en función del número anterior
  const probabilidadCambio = 0.8; // Ajusta este valor según tus preferencias

  if (Math.abs(nuevoNumero - ultimoNumero) < probabilidadCambio * rango) {
    // Cambia el número si la diferencia es menor que la probabilidad de cambio
    ultimoNumero = min + max - nuevoNumero;
  } else {
    // Si no, simplemente actualiza el último número
    ultimoNumero = nuevoNumero;
  }

  return ultimoNumero;
}
