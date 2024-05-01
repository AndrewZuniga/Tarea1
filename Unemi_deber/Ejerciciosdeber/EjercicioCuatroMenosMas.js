const read = require('prompt-sync')();
const write = console.log
// 4.	Solicitar al usuario un número y mostrar si es positivo o negativo
// analisis del requerimiento
// ENT:numero=0(leer)
// PRO: 
//      si numero > 0 entonces
//         escribir "El numero es positivo"
//      sino
//         escribir "El numero es negativo"
//      finsi
//      escribir "gracias por su visita..."
// SAL: mostrar el mensaje
// Pseudocodigo
// Algoritmo menosmas
//   declarar numero = 0
//   escribir "Ingrese numero:"
//   leer numero
//      si numero > 0 entonces
//         escribir "El numero es positivo"
//      sino
//         escribir "El numero es negativo"
//      finsi
//      escribir "gracias por su visita..."
// finAlgoritimo
// lenjuage javascript
function menosmas(){
    let numero = 0
    numero = read("Ingrese numero: ") 
    numero = parseInt(numero)
    if (numero > 0) {
      write(numero," es positvio")
    }  
    else{
      write(numero," es negativo")
    }
    write("gracias por su visita...")
  }
  menosmas()