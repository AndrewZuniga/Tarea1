const read = require('prompt-sync')();
const write = console.log 
// 16.	Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.
// Ent: sueldomensual=0.0(Leer),sueldoanual=0.0(calcular),excedente=0.0(calcular),sueldoneto=0.0(Calcular)
// Pro: sueldoanaul=sueldomensual*12
//      Si sueldoanual > 30000
//             entonces
//                 excedente=(sueldoanaul-30000)*0.15
//                 sueldoneto=sueldoanual+excedente
//             sino
//                 sueldoneto=sueldoanual
//      finSi
// Salida: sueldoneto
// Pseudocodigo 
// Algoritmo sueldo
//   declarar sueldomensual=0.0
//   Escribir "Ingrese su sueldo mensual:"
//   Leer sueldomensual
//   sueldoanaul=sueldomensual*12
//      Si sueldoanual > 30000
//             entonces
//                 excedente=(sueldoanual-30000)*0.15
//                 sueldoneto=sueldoanual-excedente
//             sino
//                 sueldoneto=sueldoanual
//      finSi
//   Escribir sueldoneto
// FinAlgoritmo
// Se crea la funcion 
function sueldo(){
    let sueldomensual = 0.0, sueldoneto = 0.0
    sueldomensual = parseFloat(read("Ingrese su sueldo mensual:"))
    let sueldoanual = sueldomensual * 12
    if (sueldoanual > 30000){
        let excedente = (sueldoanual-30000)*0.15
        sueldoneto = sueldoanual - excedente
    }   
    else{
        sueldoneto = sueldoanual
    }
    write(`Su sueldo neto anual es ${sueldoneto.toFixed(2)}`)
}
sueldo()
