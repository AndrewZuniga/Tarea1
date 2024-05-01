// 12.	Pedir 5 números y asignarlos en un arreglo
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: numeros=0(leer), arreglo=0(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: arreglo = [numeros]
// La informacion de las variables procesadas
// Salida: arreglo
// Pseudocodigo 
// Algoritmo Arreglo
//   declarar numeros=0(leer), arreglo=0(proceso)
//   Repetir 5 veces:
//   Escribir "Ingresar 5 numeros:"
//   Leer numeros
//   Retornar 
//   Escribir "Numeros ingresados",numeros
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log 
// Se crea la funcion 
function arreglo(){
    let numeros = []
    for (let i = 0; i < 5; i++){
        let numero = parseInt(read("Ingrese un numero:"))
        numeros.push(numero)
    }
    return numeros
}
let numeros5 = arreglo()
write(`Numeros ingresados son: ${numeros5}`)