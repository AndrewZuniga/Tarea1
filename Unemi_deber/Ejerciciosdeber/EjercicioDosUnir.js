//2.	Pedir dos palabras y presentarlas concatenadas
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: palabra1=""(leer), palabra2=""(Leer),concatenar(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: concatenar=palabra1+palabra2
// La informacion de las variables procesadas
// Salida: concatenar
// Pseudocodigo 
// Algoritmo unir
//   declarar palabra1
//   Escribir "Ingresar 1º palabra" 
//   Leer palabra1
//   declarar palabra2
//   Escribir "Ingresar 2º palabra"
//   Leer palabra2
//   concatenar=palabra1+palabra2
//   Escribir concatenar
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log 
// Se crea la funcion
function unir(){
    let palabra1="",palabra2="",concatenar=""
    palabra1 = read("Ingresar palabra1:")
    palabra2 = read("Ingresar palabra2:")
    concatenar=palabra1+" "+palabra2
    write(concatenar)
}
// Se llama o se ejecuta la funcion 
unir()