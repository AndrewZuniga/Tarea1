const write = console.log 
// 21.	Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor
// ENT: un arreglo con 3 elementos 
// PRO: comparar el primer elemento('arreglo[0]), el segundo elemento('arreglo[1]) y el ultimo elemento ('arreglo[2]')
// SAL: mensaje diciendo cual es el elemento mayor de todos
// Pseudocodigo
// Algoritmo arreglelmayor
// Declarar arr como arreglo de 3 elementos
// Asignar valores al arreglo arr
// Si arr[0] > arr[1] && arr[0] > arr[2] entonces
//    Escribir "El primer elemento es el mayor"
// Si arr[1] > arr[0] && arr[1] > arr[2] entonces
//    Escribir "El segundo elemento es el mayor"
// Si arr[2] > arr[0] && arr[2] > arr[1] entonces
//    Escribir "El tercer elemento es el mayor"
// FinSi
// FinAlgoritmo
// Se crea la función
function arreglelmayor() {
    let arr = [1, 2, 3]
    if (arr[0] > arr[1] && arr[0] > arr[2]) {
        write("El primer elemento es el mayor")
    } 
    if (arr[1] > arr[0] && arr[1] > arr[2]) {
        write("El segundo elemento es el mayor")
    } 
    if(arr[2] > arr[0] && arr[2] > arr[1]) {
        write("El tercer elemento es el mayor")
    }
}
arreglelmayor();