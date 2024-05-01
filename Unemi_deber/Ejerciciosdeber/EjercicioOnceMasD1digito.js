const read = require('prompt-sync')();
const write = console.log
// 11.	Solicitar al usuario un número y mostrar si es un número de un solo dígito.
// ENT:numero=0(leer)
// PRO: 
//      si numero < 9 || numero > -9
//         escribir "El numero es de un solo  digito"
//      sino
//         escribir "El numero es de mas de un digito"
//      finsi
//      escribir "gracias por su visita..."
// SAL: mostrar el mensaje
// Pseudocodigo
// Algoritmo masdeundigito
//   declarar numero=0
//   escribir "Ingrese un numero:"
//   leer numero
//   si numero <= 9 || numero >= -9
//         escribir "El numero es de un solo digito"
//      sino
//         escribir "El numero es de mas de un digito"
//      finsi
// finAlgoritimo
// lenjuage javascript
function masdeundigito(){
    let numero = 0
    numero = parseInt(read("Ingrese un numero:"))
    if (numero >= -9 && numero <= 9) {
        write(`El numero ${numero} es de un solo digito`)
    } else {
        write(`El numero ${numero} es de mas de un digito`);
    } 
  }
  masdeundigito()