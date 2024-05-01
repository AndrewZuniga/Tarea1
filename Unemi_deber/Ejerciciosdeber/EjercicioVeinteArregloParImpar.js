const write = console.log 
//20.	Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar
// ENT: un arreglo con 5 elementos 
// PRO: analizar si el primer elemento('arreglo[0]) y el ultimo elemento ('arreglo[4]') es par o impar
// SAL: mensaje diciendo si es par o impar cada elemento
// Pseudocodigo
// Algoritmo arregloimparpar
// Declarar arr como arreglo de 5 elementos
// Asignar valores al arreglo arr
// residuo1 = arr[0]%2
// residuo2 = arr[4]%2
// Si residuo1 == 0 entonces
//    Escribir "El primer elemento es par"
// Sino
//    Escribir "El primer elemento es impar"
// Si residuo2 == 0 entonces
//    Escribir "El ultimo elemento es par"
// Sino
//    Escribir "El ultimo elemento es impar"
// FinSi
// FinAlgoritmo
// Se crea la función
function arregloimparpar() {
    let arr = [2, 3, 5, 7, 11]
    let residuo1 = arr[0]%2
    let residuo2 = arr[4]%2
    if (residuo1 == 0 ) {
        write("El primer elemento es par")
    } else {
        write("El primer elemento es impar")
    }
    if (residuo2 == 0 ) {
        write("El ultimo elemento es par")
    } else {
        write("El ultimo elemento es impar")
    }    
}
arregloimparpar();