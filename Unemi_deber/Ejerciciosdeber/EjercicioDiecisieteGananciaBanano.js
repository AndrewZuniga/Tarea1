const read = require('prompt-sync')();
const write = console.log 
// 17.	La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente: Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2. Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2. Realice un algoritmo para determinar la ganancia obtenida.
// Ent: precio=0.0(Leer),tipo=""(leer),tamaño=0(leer),kg=0.0(leer),preciofinal(calcular),ganancia(calcular)
// Pro: preciofinal=precio+(cargo o rebaja segun el tipo y el tamaño) 
//      ganancia=preciofinal*kg
// Salida: ganancia
// Pseudocodigo 
// Algoritmo gananciaBanano
//  declarar precioInicial=0.0, tipo="", tamaño=0, kg=0.0, precioFinal=0.0, ganancia=0.0
//  Escribir "Ingrese el precio inicial por kilogramo de banano:"
//  Leer precioInicial
//  Escribir "Ingrese el tipo de banano (A o B):"
//  Leer tipo
//  Escribir "Ingrese el tamaño de banano (1 o 2):"
//  Leer tamaño
//  Escribir "Ingrese la cantidad de kilogramos de banano:"
//  Leer kg
//  Si tipo es A
//      Si tamaño es 1
//          entonces precioFinal = precioInicial + 2
//      sino
//          entonces precioFinal = precioInicial + 3
//  sino Si tipo es B
//      Si tamaño es 1
//          entonces precioFinal = precioInicial - 3
//      sino
//          entonces precioFinal = precioInicial - 5
//  finSi
//  ganancia = precioFinal * kg
//  Escribir "La ganancia obtenida es $" + ganancia
//  FinAlgoritmo
// Se crea la funcion 
function gananciaBanano() {
    let precioInicial = parseFloat(read("Ingrese el precio inicial por kilogramo de banano: "))
    let tipo = read("Ingrese el tipo de banano (A o B): ")
    let tamaño = parseInt(read("Ingrese el tamaño de banano (1 o 2): "))
    let kilogramos = parseFloat(read("Ingrese la cantidad de kilogramos de banano: "))
    let precioFinal = 0.0
    if (tipo == 'A') {
        if (tamaño == 1) {
            precioFinal = precioInicial + 2
        } else if (tamaño == 2) {
            precioFinal = precioInicial + 3
        }
    } else if (tipo == 'B') {
        if (tamaño == 1) {
            precioFinal = precioInicial - 3
        } else if (tamaño == 2) {
            precioFinal = precioInicial - 5
        }
    }
    let ganancia = precioFinal * kilogramos;
    write(`La ganancia obtenida es $${ganancia.toFixed(2)}`)
}
// Ejecutar la función
gananciaBanano()