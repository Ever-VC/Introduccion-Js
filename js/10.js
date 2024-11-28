// Objetos

const nombre_producto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

// Un objeto agrupa todo en una sola variable
const producto = {
    nombre_producto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto);

// Acceder a los valores de un objeto
console.log(producto.nombre_producto);
console.log(producto.precio);
console.log(producto.disponible);

// Otra forma de acceder a los valores de un objeto
console.log(producto['nombre_producto']);
console.log(producto['precio']);
console.log(producto['disponible']);

// Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";
console.log(producto);

// Eliminar propiedades del objeto
delete producto.disponible;
console.log(producto);