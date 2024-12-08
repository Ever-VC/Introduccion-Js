//POO

// Object Literal
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}
producto.mostrarInfo();

// Object Constructor
function Producto(nombre, precio, disponible = true) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
    this.mostrarInfo = function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

const producto2 = new Producto('Monitor 24 Pulgadas', 500);
producto2.mostrarInfo();
const producto3 = new Producto('Teclado', 50, false);
producto3.mostrarInfo();
const producto4 = new Producto('Mouse gamer', 20);
producto4.mostrarInfo();