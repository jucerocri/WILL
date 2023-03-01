/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  const numInvertido = parseInt(num.toString().split('').reverse().join(''));
  return num === numInvertido;

  //toString()  --> Convierte el número en una cadena de caracteres.
  //split('')   --> Divide la cadena en un arreglo de caracteres.
  //reverse()   --> Inverte el orden de los caracteres.
  //join('')    --> Une los caracteres de nuevo en una cadena. 
  //parseInt()  --> Convierte la cadena invertida en un número. 
  //Finalmente  --> compara el número original con el número invertido, y devuelve true si son iguales, y false si son diferentes.

}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico