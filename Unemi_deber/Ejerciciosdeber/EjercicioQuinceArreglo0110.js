// 15.	Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre sí
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: Un arreglo con 5 elementos
// Los calculos o procesos que se hacen con las variables
// Proceso: Tomar los elementos de las posiciones 0(primero), 4(ultimo) e intercambiarlos 
// La informacion de las variables procesadas
// Salida: Un arreglo con los valores del primer y último elemento intercambiados
// Pseudocodigo 
// Algoritmo arreglo0440
//   Crear funcion
//   Almacenar 1ª elemento 
//   elem1 = arreglo[0]
//   Asignar el ultimo elemento al 1º elemento
//   arreglo[0] = arreglo[4]
//   Asignar el 1º elemento al ultimo elemento
//   arreglo[4] = elem1   
//   Fin funcion
//   return arreglo
// FinAlgoritmo
const write = console.log 
// Se crea la funcion 
function arreglo0440(arreglo){
    let elem1 = arreglo[0]
    arreglo[0] = arreglo[4]
    arreglo[4] = elem1
    return arreglo
}
// Se llama o se ejecuta la funcion con un arreglo de 5 elementos
let arregloejem = [1,2,3,4,5] 
write(`Arreglo original: ${arregloejem}`)
let resultado = arreglo0440(arregloejem)
write(`Arreglo modificado: ${resultado}`)