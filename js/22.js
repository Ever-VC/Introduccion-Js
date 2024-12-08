// For loop

/*for (let i = 0; i < 10; i++) {
    console.log(i);
}*/

/*for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}*/

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

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

//While loop

//Do while loop