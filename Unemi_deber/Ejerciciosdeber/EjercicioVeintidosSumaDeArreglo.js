const write = console.log 
// 22.	Dado un arreglo de 5 elementos presentar la suma de dichos elementos
// ENT: un arreglo con 5 elementos 
// PRO: Sumar cada elemento del arreglo dado
// SAL: resulatado de la suma realizada
// Pseudocodigo
// Algoritmo sumaarreglo
// Declarar arr como arreglo de 5 elementos
// Asignar valores al arreglo arr
// suma = arr[0]+arr[1]+arr[2]+arr[3]+arr[4]
// Escribir = suma
// FinAlgoritmo
// Se crea la función
function sumaarreglo() {
    let arr = [2, 3, 5, 7, 11]
    suma = arr[0]+arr[1]+arr[2]+arr[3]+arr[4]
    write(suma)
}
sumaarreglo();