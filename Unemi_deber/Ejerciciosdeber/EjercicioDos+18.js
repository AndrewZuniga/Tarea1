// 2.	Solicitar al usuario su edad y mostrar si es mayor o menor de edad
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: edad=0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: Si edad > 18
//             entonces
//                 Escribir "Eres mayor edad"
//             sino
//                 Escribir "Eres menor de edad"
//             finSi
// La informacion de las variables procesadas
// Salida: Presentar si el usuario es mayor o menor de edad
// Pseudocodigo 
// Algoritmo mayoredad
//   declarar edad = 0
//   Escribir "Ingrese su edad:"
//   Leer edad
//   Si edad >= 18
//             entonces
//                 Escribir "Eres mayor edad"
//             sino
//                 Escribir "Eres menor de edad"
//             finSi
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log 
// Se crea la funcion 
function mayordeedad(){
    let edad = 0
    edad = parseInt(read("Ingrese su edad:"))
    if (edad >= 18) {
        write("Es mayor de edad :D")
    }
        else{
            write("Es menor de edad :C")
        }
}
mayordeedad()