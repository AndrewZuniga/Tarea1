// Definimos la función f(x) = x^2
function f(x) {
    return (x * x)/(2 * (x * x) + x +1);
}

// Calculamos la diferencia finitas hacia adelante para aproximar la derivada de f en x
function diferenciaFinitasHaciaAdelante(x, h) {
    // Calculamos f(x + h) y f(x)
    const f_x_h = f(x + h);
    const f_x = f(x);
    
    // Calculamos la diferencia finitas hacia adelante
    const aproximacionDerivada = (f_x_h - f_x) / h;
    
    return aproximacionDerivada;
}

// Punto donde queremos calcular la derivada aproximada
const x = 1.25;
// Valor pequeño de h
const h = 0.55;

// Calculamos la derivada aproximada usando diferencias finitas hacia adelante
const derivadaAproximada = diferenciaFinitasHaciaAdelante(x, h);

// Mostramos el resultado
console.log(`La derivada aproximada de f(x) = x^2/(2(x^2)+x+1) en x = ${x} usando diferencias finitas hacia adelante es ${derivadaAproximada}.`);
