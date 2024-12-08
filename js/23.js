const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Laptop', precio: 800},
    {nombre: 'Cámara', precio: 300},
    {nombre: 'Impresora', precio: 350}
];

// Foreach
carrito.forEach(producto => console.log(producto.nombre));

// Map crea un nuevo arreglo con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
const nombreProducto = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);
console.log(nombreProducto);

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplicarPor2 = numeros.map(numero => numero * 2);
console.log(multiplicarPor2);

// Filter crea un nuevo arreglo con todos los elementos que cumplan con la condición implementada por la función dada.
const mayorA5 = numeros.filter(numero => numero > 5);
console.log(mayorA5);

const impares = numeros.filter(numero => numero % 2 != 0);
console.log(impares);