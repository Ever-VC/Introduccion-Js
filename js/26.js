//Clases

class Producto {
    constructor(nombre, precio, disponible = true) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    mostrarInfo() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }

    disponibilidad() {
        return this.disponible ? `El ${this.nombre} esta disponible.` : `El ${this.nombre} no esta disponible.`;
    }
}

const producto2 = new Producto('Monitor 24 Pulgadas', 500);
const producto3 = new Producto('Teclado', 50, false);

console.log(producto2);
console.log(producto3);

producto2.mostrarInfo();
producto3.mostrarInfo();
console.log(producto2.disponibilidad());