const read = require('prompt-sync')();
const write = console.log
// 12.	Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.
// Ent: facturatotal=0.0(Leer),ivaaplicar=0.0(Leer),totalpagar=0.0(Calcular), ivamonto=0.0(Calcular)
// Pro: facturatotal * ivaaplicar = ivamonto
//      facturatotal + ivamonto = totalpagar
// Sal: totalpagar
// Pseudocodigo 
// Algoritmo iva
//   declarar facturatotal=0.0,ivaaplicar=0.0
//   Escribir "Ingrese monto total de la factura:"
//   Leer facturatotal 
//   Escribir "Ingrese el porcentaje de IVA aplicado:"
//   Leer ivaaplicar
//   Si ivaaplicar > 1 
//      ivaaplicar = ivaaplicar / 100
//   finsi
//    ivamonto = facturatotal * ivaaplicar
//    totalpagar = facturatotal + ivamonto 
//   Escribir resultado
// FinAlgoritmo
// Se crea la funcion 
function iva(){
    let facturatotal = 0.0,ivaaplicar=0.0
    facturatotal = parseFloat(read("Ingrese monto total de la factura:"))
    ivaaplicar = parseFloat(read("Ingrese el porcentaje de IVA aplicado:"))
    if (ivaaplicar > 1){
        ivaaplicar = ivaaplicar/100
    }   
    let ivamonto = facturatotal * ivaaplicar
    let totalpagar = facturatotal + ivamonto
    write(`El monto total a pagar incluyendo el IVA es ${totalpagar.toFixed(2)}`)
}
iva()
