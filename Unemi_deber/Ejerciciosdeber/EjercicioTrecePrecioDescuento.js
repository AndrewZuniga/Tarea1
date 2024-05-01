const read = require('prompt-sync')();
const write = console.log
// 13.	Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.
// Ent: precio=0.0(Leer),descuento=0.0(Leer),descuentoaplicar=0.0(Calcular),preciofinal=0.0(Calcular)
// Pro: descuentoaplicar = precio * descuento
//      preciofinal = precio - descuentoaplicar
// Sal: preciofinal
// Pseudocodigo 
// Algoritmo preciodescuento
//   declarar precio=0.0,descuento=0.0
//   Escribir "Ingrese precio del producto:"
//   Leer precio
//   Escribir "Ingrese el porcentaje de descuento:"
//   Leer descuento
//   Si descuento > 1 
//      descuento = descuento / 100
//   finsi
//    descuentoaplicar = precio * descuento
//    preciofinal = precio - descuentoaplicar
//   Escribir resultado
// FinAlgoritmo
// Se crea la funcion 
function preciodescuento(){
    let precio = 0.0,descuento = 0.0
    precio = parseFloat(read("Ingrese precio del producto:"))
    descuento = parseFloat(read("Ingrese el porcentaje de descuento:"))
    if (descuento > 1){
        descuento = descuento/100
    }   
    let descuentoaplicar = precio * descuento
    let preciofinal = precio - descuentoaplicar
    write(`El precio final luego de aplicar el descuento ${preciofinal.toFixed(2)}`)
}
preciodescuento()
