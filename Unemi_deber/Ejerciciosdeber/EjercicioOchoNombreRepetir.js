// 8.	Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: nombre=""(leer), final=""(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: Final=nombre+nombre+nomre
// La informacion de las variables procesadas
// Salida: Final
// Pseudocodigo 
// Algoritmo repetir
//   declarar nombre
//   Escribir "Ingrese su nombre:" 
//   Leer nombre
//   Final=nombre+nombre+nombre
//   Escribir Final
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log 
// Se crea la funcion
function repetir(){
    let nombre = "",final = ""
    nombre = read("Ingrese su nombre:")
    for(i = 0; i < 3; i++){
        final = `${nombre}`
        write(final)
    } 
}
repetir()