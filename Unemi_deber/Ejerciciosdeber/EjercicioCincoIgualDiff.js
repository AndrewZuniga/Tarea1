const read = require('prompt-sync')();
const write = console.log
// 5.	Pedir al usuario dos números y mostrar si son iguales o diferentes.
// analisis del requerimiento
// ENT:numero1=0(leer),numero2=0(leer)
// PRO: 
//      si numero1 == numero2 entonces
//         escribir "Ambos numeros son iguales"
//      sino
//         escribir "Ambos numeros son diferentes"
//      finsi
//      escribir "gracias por su visita..."
// SAL: mostrar el mensaje
// Pseudocodigo
// Algoritmo igualdiff
//   declarar numero1 = 0
//   escribir "Ingrese 1º numero:"
//   leer numero1
//   declarar numero2 = 0
//   escribir "Ingrese 2º numero:"
//   leer numero2
//      si numero1 == numero2 entonces
//         escribir "Ambos numeros son iguales"
//      sino
//         escribir "Ambos numeros son diferentes"
//      finsi
//      escribir "gracias por su visita..."
// finAlgoritimo
// lenjuage javascript
function igualdiff(){
    let numero1 = 0, numero2 = 0
    numero1 = read("Ingrese 1º numero: ") 
    numero1 = parseInt(numero1)
    numero2 = read("Ingrese 2º numero: ") 
    numero2 = parseInt(numero2)
    if (numero1 == numero2) {
      write("Ambos numeros son iguales")
    }  
    else{
      write("Ambos numeros son diferentes")
    }
    write("gracias por su visita...")
  }
  igualdiff()