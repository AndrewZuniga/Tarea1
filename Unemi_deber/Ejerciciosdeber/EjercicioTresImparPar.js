// 3.	Pedir al usuario un número y mostrar si es par o impar.
// analisis del requerimiento
// ENT:numero=0(leer),residuo=0(calcular)
// PRO: residuo = numero % 2
//      si residuo==0 entonces
//         escribir "El numero es par"
//      sino
//         escribir "El numero es impar"
//      finsi
//      escribir "gracias por su visita..."
// SAL: mostrar el mensaje
// Pseudocodigo
// Algoritmo imparpar
//   declarar numero = 0, reciduo = 0
//   escribir "Ingrese numero"
//   leer numero
//   residuo = numero % 2
//   si residuo==0 entonces
//     escribir "El numero es par"
//   sino
//     escribir "El numero es impar"
//   finsi
//   escribir "gracias por su visita..."
// finAlgoritimo
// lenjuage javascript
const read = require('prompt-sync')();
const write = console.log
function imparpar(){
    let numero = 0, residuo = 0
    numero = read("Ingrese numero: ") 
    numero = parseInt(numero)
    residuo = numero % 2
    if (residuo == 0) {
      write(numero," es par")
    }  
    else{
      write(numero," es impar")
    }
    write("gracias por su visita...")
  }
  imparpar()