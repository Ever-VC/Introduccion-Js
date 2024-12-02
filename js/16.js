// Declaración de la función
function sumar(a, b) {
    return a + b;
}

// Llamada a la función
console.log(sumar(2, 3)); // 5

// Expresión de función
const sumar2 = function(a, b) {
    return a + b;
}

console.log(sumar2(10, 3)); // 13

// IIFE (Immediately Invoked Function Expression)
(function(a, b) {
    console.log(a + b);
})(5, 3); // 8

// Diferencia entre funciones (hoisting)
// La diferencia entre declarar una función y una expresión de función es que las funciones declaradas 
//son elevadas al principio del código, mientras que las expresiones de función no. Esto se conoce como hoisting.
// Por lo tanto, si intentamos llamar a una función antes de declararla, no habrá ningún problema si la función
// es declarada, pero si es una expresión de función, se lanzará un error.
