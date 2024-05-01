// 1.	Pedir al usuario su nombre y saludarlo.
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: nombre=""(leer),saludo=""(Calcular)
// Los calculos o procesos que se hacen con las variables
// Proceso: saludo="Hola,"+nombre
// La informacion de las variables procesadas
// Salida: Saludo
// Pseudocodigo 
// Algoritmo saludar
//   declarar nombre
//   Escribir "Ingrese su nombre"
//   Leer nombre
//   saludo="Hola,"+nombre
//   Escribir saludo
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log 
// Se crea la funcion
function saludo(){
    let nombre="",saludo=""
    nombre = read("Ingrese su nombre:")
    saludo = "Hola,"+" "+nombre
    write(saludo)
}
// Se llama o se ejcuta la funcion
saludo()