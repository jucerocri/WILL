/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClasePersona() {
  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
      // Inicializar las propiedades de la persona con los valores recibidos como argumento  
      this.nombre= nombre;
      this.edad= edad;
      this.hobbies= hobbies; //this.hobbies = hobbies && hobbies.every(hobbie => typeof hobbie === 'string') ? hobbies : [];
      this.amigos= amigos;
    }

//El método every() de JavaScript funciona en arreglos y lo que hace es verificar si todos los elementos de un arreglo pasan un test. El test es una función.
//El método every() comienza a ejecutar la función de test para cada elemento del arreglo y va a retornar false o true, según sea el caso:
//Falso: el método retornara false si es que la función de test retorne false para algún elemento y luego de eso dejará de ejecutar la función test en los siguientes elementos.
//Verdadero: si la función de test no retornar ningún valor false, en ese caso el método every() devolverá true. Hay que tener en cuenta que este método no cambia el arreglo original.    



    addFriend(nombre, edad) {    
      // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // No debe retornar nada.
      
      let amigo = {nombre, edad}
      this.amigos.push(amigo);
    }

    addHobby(hobby) {     
      // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
      // No debe retornar nada.
      this.hobbies.push(hobby);
    }

    getFriends() {     
      // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
      // persona.getFriends() debería devolver ['martin', 'toni']

      const transformarObjetoAmigoANombre = ((amigo) => amigo.nombre);
      const indexed = this.amigos.map(transformarObjetoAmigoANombre);
      return indexed
    }

    getHobbies() {
      // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']
      return this.hobbies
    }

    getPromedioEdad() {
            // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
      // Ej:
      // Si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29

      return this.amigos.map(amigo => amigo.edad).reduce((a, b) => a + b) / this.amigos.length

    }
  }
  return Persona;
}
// No modifiques nada debajo de esta linea //

module.exports = crearClasePersona