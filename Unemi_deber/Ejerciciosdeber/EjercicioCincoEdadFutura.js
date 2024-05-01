// 5.	Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: edad=0(Leer),resultado=0(calcular)
// Los calculos o procesos que se hacen con las variables
// Proceso: resultado=edad+1
// La informacion de las variables procesadas
// Salida: resultado
// Pseudocodigo 
// Algoritmo edadaFutura
//   declarar edad
//   Escribir "Ingrese su edad"
//   Leer edad
//   resultado=edad+1
//   Escribir resultado 
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
// Se crea la funcion 
function edadfutura(){
    let edad=0,resultado=0
    edad = parseFloat(read("Ingrese su edad:"))
    resultado = edad + 1
    write("El proximo año tendras",resultado)
} 
// Se llama o ejecuta la funcion 
edadfutura()