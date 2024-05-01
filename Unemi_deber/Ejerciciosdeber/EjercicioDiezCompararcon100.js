const read = require('prompt-sync')();
const write = console.log
// 10.	Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
// ENT:numero=0(leer)
// PRO: 
//      si numero > 100 entonces
//         escribir "El numero es mayor que 100"
//      si hay algun numero < 100
//         escribir "El numero es menor que 100"
//      sino
//         escribir "El numero es igual a 100"
//      finsi
//      escribir "gracias por su visita..."
// SAL: mostrar el mensaje
// Pseudocodigo
// Algoritmo compararcon100
//   declarar numero=0
//   escribir "Ingrese un numero:"
//   leer numero
//      si numero > 100 entonces
//         escribir "El numero es mayor que 100"
//      si numero < 100
//         escribir "El numero es menor que 100"
//      sino
//         escribir "El numero es igual a 100"
//      finsi
//      escribir "Gracias por usar este programa :D"
// finAlgoritimo
// lenjuage javascript
function compararcon100(){
    let numero = 0
    numero = parseInt(read("Ingrese un numero:"))
    if (numero > 100) {
        write(`${numero} es mayor que 100`)
    } else if (numero < 100) {
        write(`${numero} es menor que 100`)
    } else {
        write("El numero es igual a 100");
    } 
    write("Gracias por usar este programa :D")
  }
  compararcon100()