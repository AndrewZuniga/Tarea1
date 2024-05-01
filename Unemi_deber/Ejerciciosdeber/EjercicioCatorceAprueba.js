const read = require('prompt-sync')();
const write = console.log
// 14.	Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.
// Ent: nota=0.0(Leer)
// Pro: Si nota es menor que 60
//       Escribir "Reprobó"
//      Sino
//       Escribir "Aprobo"
// Sal: Mensaje diciendo si aprobo o si reprobo el examen
// Pseudocodigo 
// Algoritmo aprobar
//   declarar nota=0.0
//   Escribir "Ingrese la nota de su examen:"
//   Leer nota
//   Si nota < 60 
//   Escribir "Reprobó"
//      Sino
//   Escribir "Aprobó"
//   finsi
// FinAlgoritmo
// Se crea la funcion 
function aprobar(){
    let nota = 0.0
    nota = parseFloat(read("Ingrese la nota de su examen:"))
    if (nota < 60){
        write("Reprobó")
    }   
    else{
        write("Aprobó")
    }
}
aprobar()
