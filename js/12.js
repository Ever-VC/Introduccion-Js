"use strict"; // Operar en modo estricto

// Objetos
const producto = {
    nombre_producto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto);// Bloquea la modificación de un objeto, no se puede agregar, eliminar o modificar propiedades
Object.seal(producto);// Bloquea la modificación de un objeto, no se puede agregar o eliminar propiedades, pero si modificar las existentes

producto.imagen = "imagen.jpg";

console.log(Object.isSealed(producto)); // Devuelve true si el objeto está sellado
console.log(Object.isFrozen(producto)); // Devuelve true si el objeto está bloqueado

console.log(producto);
