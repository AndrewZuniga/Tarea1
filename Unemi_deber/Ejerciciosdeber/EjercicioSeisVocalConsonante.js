const read = require('prompt-sync')();
const write = console.log
// 6.	Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
// analisis del requerimiento
// ENT:caracter=""(leer)
// PRO: 
//      si caracter == a || e || i || o || u entonces
//         escribir "El caracter es una vocal"
//      sino
//         escribir "El caracter es una consonante"
//      finsi
//      escribir "gracias por su visita..."
// SAL: mostrar el mensaje
// Pseudocodigo
// Algoritmo vocalconsonante
//   declarar caracter = ""
//   escribir "Ingrese caracter:"
//   leer caracter
//      si caracter == a || e || i || o || u entonces
//         escribir "El caracter es una vocal"
//      sino
//         escribir "El caracter es una consonante"
//      finsi
//      escribir "gracias por su visita..."
// finAlgoritimo
// lenjuage javascript
function vocalconsonante(){
    let caracter = ""
    caracter = read("Ingrese caracter: ") 
    const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    if (vocales.includes(caracter)) {
        write(`El caracter ${caracter} es una vocal`);
    } else {
        write(`El caracter ${caracter} es una consonante`);
    }
    write("gracias por su visita...")
  }
  vocalconsonante()