// 14.	Dado un arreglo de 5 elementos, presentar el primero, el del medio y el ultimo
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: Un arreglo con 5 elementos
// Los calculos o procesos que se hacen con las variables
// Proceso: Tomar los elementos en las posiciones 0(primero),2(medio),4(ultimo)
// La informacion de las variables procesadas
// Salida: Presentar los elementos 0(primero),2(medio),4(ultimo)
// Pseudocodigo 
// Algoritmo arreglo024
//   Crear funcion
//   Declarar variable primero = arreglo[0]
//   Declarar variable medio = arreglo[2]
//   Declarar variable ultimo = arreglo[4]
//     
//   Imprimir "Primero:", primero
//   Imprimir "Del medio:", medio
//   Imprimir "Último:", ultimo
//   Fin funcion
//   ejecutar funcion con el arreglo dado  
// FinAlgoritmo
const write = console.log 
// Se crea la funcion 
function arreglo024(arreglo){
    let primero = arreglo[0], medio = arreglo[2], ultimo = arreglo[4];
    write(`Primero: ${primero}, en medio: ${medio} y ultimo: ${ultimo}`)
}
// Se llama o se ejecuta la funcion con un arreglo de 5 elementos
let arregloejem = ["televisor","libro","celular","computadora","carro"] 
arreglo024(arregloejem)


