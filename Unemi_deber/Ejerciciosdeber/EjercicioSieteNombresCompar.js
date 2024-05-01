const read = require('prompt-sync')();
const write = console.log
// 7.	Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo-
// analisis del requerimiento
// ENT:nombre1=""(leer),nombre2=""(leer)
// PRO: 
//      si nombre1 > nombre2 entonces
//         escribir "El nombre1 es mayor que nombre2"
//      si hay algun nombre1 < nombre2
//         escribir "El nombre1 es menor que nombre2"
//      sino
//         escribir "Los nombres son iguales"
//      finsi
//      escribir "gracias por su visita..."
// SAL: mostrar el mensaje
// Pseudocodigo
// Algoritmo nombrecomparar
//   declarar nombre1=""
//   escribir "Ingrese 1º nombre:"
//   leer nombre1
//   declarar nombre2=""
//   escribir "Ingrese 2º nombre:"
//   leer nombre2
//       si nombre1 > nombre2 entonces
//         escribir "El nombre1 es mayor que nombre2"
//      si hay algun nombre1 < nombre2
//         escribir "El nombre1 es menor que nombre2"
//      sino
//         escribir "Los nombres son iguales"
//      finsi
//      escribir "gracias por su visita..."
// finAlgoritimo
// lenjuage javascript
function nombrecomparar(){
    let nombre1 = "", nombre2 = ""
    nombre1 = read("Ingrese 1º nombre: ")
    nombre2 = read("Ingrese 2º nombre: ") 
    if (nombre1 > nombre2) {
        write(`${nombre1} es mayor que ${nombre2}`)
    } else if (nombre1 < nombre2) {
        write(`${nombre1} es menor que ${nombre2}`)
    } else {
        write("Los dos nombres son iguales.");
    } 
  }
  nombrecomparar()