// 4.	Pedir al usuario un número y mostrar su doble.
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: numero=0.0(Leer),total=(calcular)
// Los calculos o procesos que se hacen con las variables
// Proceso: total=numero*2
// La informacion de las variables procesadas
// Salida: total
// Pseudocodigo 
// Algoritmo duplicar
//   declarar numero
//   Escribir "Ingrese numero"
//   Leer numero
//   total=numero*2
//   Escribir total
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
// Se crea la funcion
function duplicar(){
    let numero=0.0,total=0.0
    numero = parseFloat(read("Ingrese numero:"))
    total = numero * 2
    write("El doble de",numero,"es",total)
}
// Se llama o ejecuta la funcion
duplicar()