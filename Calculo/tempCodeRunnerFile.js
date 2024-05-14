// Calculamos la derivada aproximada usando diferencias finitas hacia adelante
const derivadaAproximada = diferenciaFinitasHaciaAdelante(x, h);

// Mostramos el resultado final en la consola
console.log(`La derivada aproximada de f(x) = x^2/(2(x^2)+x+1) = ${x} usando diferencias finitas hacia adelante es ${derivadaAproximada}.`);
