const write = console.log 
// 19.	Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.
// ENT: un arreglo con 5 elementos 
// PRO: comparar el primer elemento('arreglo[0]) con el ultimo elemento ('arreglo[4]')
// SAL: mensaje diciendo si el primer elemento es o no mayor que el ultimo elemento
// Pseudocodigo
// Algoritmo arreglomayomenor
// Declarar arr como arreglo de 5 elementos
// Asignar valores al arreglo arr
// Si arr[0] > arr[4] entonces
//    Escribir "El primer elemento es mayor que el último elemento"
// Sino
//    Escribir "El primer elemento no es mayor que el último elemento"
// FinSi
// FinAlgoritmo
// Se crea la función
function arreglomayomenor() {
    let arr = [1, 2, 3, 4, 5]
    if (arr[0] > arr[4]) {
        write("El primer elemento es mayor que el último elemento")
    } else {
        write("El primer elemento no es mayor que el último elemento")
    }
}
arreglomayomenor();