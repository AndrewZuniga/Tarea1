// 15.	Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación es anterior a 2010, aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final.
// Analisis de requerimientos
// Los datos o variables del problema 
// Entrada: precioVenta=0.0(Leer),anioFabricacion=0(Leer),descuento=0(Calcular),precioCalculado=0(calculado)
// Los calculos o procesos que se hacen con las variables
// Proceso: Si anioFabricacion < 2010
//             entonces
//                 descuento=precioVenta*0.10
//             sino
//                 descuento=0
//             finSi
//             precioFinal=precioVenta-descuento
// La informacion de las variables procesadas
// Salida: precioFinal
// Pseudocodigo 
// Algoritmo PrecioCarro
//   declarar precioVenta=0.0,anioFabricacion=0,descuento=0,precioFinal=0
//   Escribir "Ingrese Precio Venta:"
//   Leer precioVenta
//   Escribir "Ingrese año Fabricacion:"
//   Leer anioFabricacion
//   Si anioFabricacion < 2010
//     entonces
//       descuento = precioVenta * 0.10
//     sino
//       descuento = 0
//   finSi
//   precioFinal = precioVenta - descuento
//   Escribir precioFinal
// FinAlgoritmo
const read = require('prompt-sync')();
const write = console.log 
// Se crea la funcion 
function precioCarro(){
    let precioVenta=0.0,anioFabricacion=0,precioFinal=0.0
    precioVenta = read("Ingrese Precio Venta:")
    precioVenta = parseFloat(precioVenta)
    anioFabricacion = read("Ingrese Año Fabricacion:")
    anioFabricacion = parseFloat(anioFabricacion)
    if (anioFabricacion < 2010){
        descuento = precioVenta*0.10
    }   
    else{
        descuento = 0
    }
    precioFinal = precioVenta - descuento
    write(`Precio Venta: ${precioVenta} - Descuento:${descuento}: Precio Final=${precioFinal}`)
}
precioCarro()
