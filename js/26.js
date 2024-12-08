//Clases

class Producto {
    constructor(nombre, precio, disponible = true) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    mostrarInfo() {
        return `El producto: ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    disponibilidad() {
        return this.disponible ? `El ${this.nombre} esta disponible.` : `El ${this.nombre} no esta disponible.`;
    }
}

const producto2 = new Producto('Monitor 24 Pulgadas', 500);
const producto3 = new Producto('Teclado', 50, false);

console.log(producto2);
console.log(producto3);

console.log(producto2.mostrarInfo());
console.log(producto3.mostrarInfo());
console.log(producto2.disponibilidad());

class Libro extends Producto {
    constructor(nombre, autor, precio, year) {
        super(nombre, precio);
        this.autor = autor;
        this.year = year;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()} y fue escrito por ${this.autor} en el año ${this.year}`;
    }
}

const libro = new Libro('JavaScript la Revolución', 'Juanito', 20, 2024);
console.log(libro.mostrarInfo());