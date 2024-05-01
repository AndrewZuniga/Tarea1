// 11.	Solicitar al usuario una distancia en metros y mostrarla en centímetros.
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: metro=0.0(leer), centimetros=0.0(calcular), 
// Los calculos o procesos que se hacen con las variables
// Proceso: centimetros = metros * 100
// La informacion de las variables procesadas
// Salida: centimetros
// Pseudocodigo 
// Algoritmo distancia
//   declarar metro
//   Escribir "Ingresar distancia en metros:" 
//   Leer metro
//   centimetros = metros * 100
//   Escribir "La distancia en centímetros es", centimentros
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log 
// Se crea la funcion
function distancia(){
    let metros = 0.0, centimetros = 0.0
    metros = parseFloat(read("Ingrese distancia en metros:"))
    centimetros = metros * 100
    write(`La distancia en centímetros es: ${centimetros}`);
}
distancia()