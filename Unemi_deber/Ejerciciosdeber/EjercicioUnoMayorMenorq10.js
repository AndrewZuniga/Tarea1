// 1.	Pedir al usuario un número y mostrar si es mayor o menor que 10.
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: numero=0.0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: Si numero > 10
//             entonces
//                 Escribir "numero > 10"
//             sino
//                 Escribir "numero < 10"
//             finSi
// La informacion de las variables procesadas
// Salida: Presentar si el numero es mayor o menor que 10
// Pseudocodigo 
// Algoritmo mayormenor
//   declarar numero = 0.0
//   Escribir "Ingrese numero:"
//   Leer numero
//   Si numero > 10
//      entonces
//        Escribir "numero > 10"
//      sino
//        Escribir "numero < 10"
//   finSi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log 
// Se crea la funcion 
function mayormenor(){
    let numero = 0.0
    numero = parseFloat(read("Ingrese numero:"))
    if (numero > 10) {
        write(`${numero} es mayor que 10`)
    }
        else{
            write(`${numero} es menor que 10`)
        }
}
mayormenor()