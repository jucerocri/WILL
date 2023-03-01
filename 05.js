/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function pluck(array, propiedad) {
  // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar map.

  // Creamos un nuevo array vacío para almacenar los valores de la propiedad
  const valores = [];

  // Iteramos sobre cada objeto en el array
  for (let i = 0; i < array.length; i++) {
    // Verificamos si el objeto tiene la propiedad solicitada
    if (array[i].hasOwnProperty(propiedad)) {
      // Si la tiene, agregamos el valor de la propiedad al nuevo array
      valores.push(array[i][propiedad]);
    }
  }

  // Devolvemos el nuevo array con los valores de la propiedad
  return valores;

}

// No modifiques nada debajo de esta linea //

module.exports = pluck