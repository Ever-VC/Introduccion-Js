// Objetos
const producto = {
    nombre_producto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Forma anterior de acceder a los valores de un objeto
// const precio_producto = producto.precio;
// const nombre_producto = producto.nombre_producto;

// console.log(precio_producto);
// console.log(nombre_producto);

// Destructuring
const {precio, nombre_producto} = producto;
console.log(precio);
console.log(nombre_producto);