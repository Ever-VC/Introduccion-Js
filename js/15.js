const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

// forEach
meses.forEach( (mes, i) => {
    if (i === 1) {
        console.log('Febrero encontro');
    }
});

// Includes ideal para arreglos planos
const resultado = meses.includes('Febrero');
console.log(resultado);

// Some ideal permite revisar si un valor existe en un arreglo de objetos
const resultado2 = carrito.some( producto => producto.nombre === 'Celular');
console.log(resultado2);

// Reduce ideal permite sumar todos los valores de un arreglo
const resultado3 = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado3);

// Filter ideal permite filtrar elementos de un arreglo
const resultado4 = carrito.filter( producto => producto.precio > 400);
console.log(resultado4);