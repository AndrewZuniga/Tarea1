// Definimos la función f(x) = x^2/(2(x^2)+x+1)
function f(x) {
    return (x * x)/(2 * (x * x) + x +1);
}
console.log("Tenemos una funcion f(x) = x^2/(2(x^2)+x+1)")
// Definimos el punto x donde queremos calcular la derivada aproximada
const x = 1.25;
console.log("x = 1.25")
// Definimos un pequeño valor de h para el cálculo
const h = 0.55;
console.log("h = 0.55")
// Calculamos la diferencia finitas hacia adelante para aproximar la derivada de f en x
function diferenciaFinitasHaciaAdelante(x, h) {
    // Paso 1: Calcular f(x + h)
    // Calculamos el valor de la función f en el punto x + h
    const f_x_h = f(x + h);
    console.log("Calcular f(x + h):")
    console.log(`f(${x} + ${h}) = f(${x + h}) = ${f_x_h}`);
    // Paso 2: Calcular f(x)
    // Calculamos el valor de la función f en el punto x
    const f_x = f(x);
    console.log("Calcular f(x):")
    console.log(`f(${x}) = ${f_x}`);
    // Paso 3: Calcular la diferencia finitas hacia adelante
    // Calculamos la diferencia entre f(x + h) y f(x), luego la dividimos por h
    const diferencia = f_x_h - f_x;
    console.log("Calcular (f(x + h) - f(x))/h")
    const aproximacionDerivada = diferencia / h;
    // Mostramos los cálculos paso a paso
    console.log(`f(${x} + ${h}) - f(${x}) = ${f_x_h} - ${f_x} = ${diferencia}`);
    console.log(`Diferencia finitas hacia adelante: (${diferencia}) / ${h} = ${aproximacionDerivada}`);
    // Devolvemos la aproximación de la derivada
    return aproximacionDerivada;
}
// Calculamos la derivada aproximada usando diferencias finitas hacia adelante
const derivadaAproximada = diferenciaFinitasHaciaAdelante(x, h);
// Mostramos el resultado final en la consola
console.log(`La derivada aproximada de f(x) = x^2/(2(x^2)+x+1) = ${x} usando diferencias finitas hacia adelante es ${derivadaAproximada}.`);