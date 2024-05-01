// 3.	Solicitar al usuario dos números y mostrar su suma.
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: numero1=0.0(Leer),numero2=0.0(Leer),total=(calcular)
// Los calculos o procesos que se hacen con las variables
// Proceso: total=numero1+numero2
// La informacion de las variables procesadas
// Salida: total
// Pseudocodigo 
// Algoritmo sumar
//   declarar numero1
//   Escribir "Ingrese 1º numero"
//   Leer numero1
//   Escribir "Ingrese 2º numero"
//   Leer numero2
//   total=numero1+numero2
//   Escribir total
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
// Se crea la funcion 
function sumar(){
    let numero1=0.0,numero2=0.0,total=0.0
    numero1 = parseFloat(read("Ingrese 1º numero:"))
    numero2 = parseFloat(read("Ingrese 2º nuemro:"))
    total = numero1 + numero2
    write(numero1,"+",numero2,"=",total)
} 
// Se llama o ejecuta la funcion 
sumar()