const read = require('prompt-sync')();
const write = console.log 
// 18.	“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes: El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00.  Para más de 200 personas el costo por platillo es de $10.00. Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva
// Ent: clientes=0(Leer),costo=0(calcular),costototal=0(calcular),presupuesto=0.0(calcular), ivaaplicado=0.0(calular)
// Pro: Si clientes es mayor a 200, el costo es de $10.00.
//      Si clientes es mayor a 100 pero menor o igual a 200, el costo es de $15.00.
//      Si clientes es menor o igual a 100, el costo es de $20.00.
// costototal=clientes*costo
// ivaaplicado = costotal * 0.15
// presupuesto = costototal + ivaaplicado
// Sal: presupuesto
// Pseudocodigo 
// Algoritmo clientesomosmas
//    Leer clientes
//    Si clientes > 200
//    entonces
//      costo = 10.00
//    Sino si clientes > 100
//    entonces
//      costo = 15.00
//    Sino
//      costo = 20.00
//    FinSi
//    costototal = clientes * costo
//    ivaaplicado = costototal * 0.15
//    presupuesto = costototal + ivaaplicado
//    Escribir "Presupuesto final: $" + presupuesto
// FinAlgoritmo
// Se crea la funcion 
function clientesomosmas() {
    let clientes = parseInt(read("Ingrese el número de personas: "))
    let costo = 0.0
    if (clientes > 200) {
        costo = 10.00
    } else if (clientes > 100) {
        costo = 15.00
    } else {
        costo = 20.00
    }
    let costototal = clientes * costo
    let ivaaplicado = costototal * 0.15
    let presupuesto = costototal + ivaaplicado
    write(`Presupuesto final: $${presupuesto.toFixed(2)}`);
}
// Ejecutar la función
clientesomosmas();
