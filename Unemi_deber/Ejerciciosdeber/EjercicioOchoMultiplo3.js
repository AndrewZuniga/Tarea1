const read = require('prompt-sync')();
const write = console.log

// 8.	Pedir al usuario un número y mostrar si es múltiplo de 3
// analisis del requerimiento
// ENT:numero=0(leer),residuo=0(calcular)
// PRO: residuo = numero % 3
//      si residuo==0 entonces
//         escribir "El numero es multiplo 3"
//      sino
//         escribir "El numero no es multiplo 3"
//      finsi
//      escribir "gracias por su visita..."
// SAL: mostrar el mensaje
// algoritmo
// Algoritmo mutiplo3
//   declarar numero = 0, reciduo = 0
//   escribir "Ingrese numero"
//   leer numero
//   residuo = numero % 3
//   si residuo==0 entonces
//     escribir "El numero es multiplo 3"
//   sino
//     escribir "El numero no es multiplo 3"
//   finsi
//   escribir "Gracias por usar este programa :D"
// finAlgoritimo
// lenjuage javascript
function multiplo3(){
  let numero = 0, residuo = 0
  numero = read("Ingrese numero: ") //Math.random()*20//
  numero = parseInt(numero)// "9" => 9
  residuo = numero % 3
  if (residuo == 0) {
    write(numero," es multiplo 3")
    //num="es mutiplo"
  }  
  else{
    write(numero," no es multiplo 3")
    //num = "no es multiplo"
  }
  write("Gracias por usar este programa :D")
}
multiplo3()