// Objetos
const producto = {
    nombre_producto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

const nuevoProducto = {...producto, ...medidas}; // Spread Operator para unir dos objetos   

console.log(nuevoProducto);
console.log(producto);