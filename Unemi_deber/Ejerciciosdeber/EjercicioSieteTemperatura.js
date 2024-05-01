// 7.	Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: temperatura1=0.0(Leer),temperatura2=0.0(calcular)
// Los calculos o procesos que se hacen con las variables
// Proceso: temperatura2=temperatura1*1.8+32
// La informacion de las variables procesadas
// Salida: temperatura2
// Pseudocodigo 
// Algoritmo sumar
//   declarar temperatura1
//   Escribir "Ingrese temperatura en grado Celsius"
//   Leer temperatura1
//   temperatura2=temperatura1*1.8+32
//   Escribir temperatura2
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log
// Se crea la funcion 
function temperatura(){
    let temperatura1=0.0,temperatura2=0.0
    temperatura1 = parseFloat(read("Ingrese temperatura en grado Celsius:"))
    temperatura2 = temperatura1 * 1.8 + 32
    write("La temperatura en grados Fahrenheit es",temperatura2)
} 
// Se llama o ejecuta la funcion 
temperatura()