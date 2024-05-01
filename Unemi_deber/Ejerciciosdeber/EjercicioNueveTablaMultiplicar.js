// 9.	Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: numero=0(leer), resultado=0(calcular)
// Los calculos o procesos que se hacen con las variables
// Proceso: Para i desde 1 hasta 10
//      Calcular resultado = número * i
//      Mostrar resultado
//   Fin Para
// La informacion de las variables procesadas
// Salida: numero*i=resultado
// Pseudocodigo 
// Algoritmo tabla
//   declarar numero = 0, 
//   Escribir "Ingresar numero:" 
//   Leer numero
//   Para i desde 1 hasta 10
//      Calcular resultado = número * i
//      Mostrar resultado
//   Fin Para
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log 
// Se crea la funcion
function tabla(){
    const numero = parseInt(read("Ingresar numero:"))
    if (isNaN(numero)) {
        write("Por favor, ingrese un número válido.")
        return
    }
    write(`Tabla de multiplicar del ${numero}:`)
    for (let i = 1; i <= 10; i++){
    write (`${numero} * ${i} = ${numero * i} `)
    }
}
tabla()