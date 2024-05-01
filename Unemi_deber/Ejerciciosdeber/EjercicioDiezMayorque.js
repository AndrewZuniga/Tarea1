// 10.	Pedir al usuario dos números y mostrar el mayor.
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: numero1=0.0(leer), numero2=0.0(leer), 
// Los calculos o procesos que se hacen con las variables
// Proceso: Si numero1 > numero2
//              Escribir "numero1 es mayor"
//             sino
//               Escribir "nuermo2 es mayor"
// La informacion de las variables procesadas
// Salida: numero1 es mayor o numero2 es mayor 
// Pseudocodigo 
// Algoritmo mayor
//   declarar numero1
//   Escribir "Ingrese su numero1:" 
//   Leer numero2
//   declarar numero2
//   Escribir "Ingrese su numero2:" 
//   Leer numero2
//   Si numero1 > numero2
//             Entonces
//              Escribir "numero1 es mayor"
//             sino
//               Escribir "nuermo2 es mayor"
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log 
// Se crea la funcion
function mayorq(){
    let numero1 = 0.0, numero2 = 0.0
    numero1 = parseFloat(read("Ingrese 1º numero:"))
    numero2 = parseFloat(read("Ingrese 2º numero:"))
    if (numero1 > numero2) {
        write(`${numero1} es el mayor`)
    } else if (numero2 > numero1) {
        write(`${numero2} es el mayor.`);
    } else {
        write("Los dos números son iguales.");
    } 
}
mayorq()