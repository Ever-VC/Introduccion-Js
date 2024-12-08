//This

// Object literal   
const reservacion = {
    nombre: 'Ever',
    apellido: 'Vasquez',
    total: 5000,
    pagado: false,
    informacion: function() { // Si se usa arrow function, this no funcionará correctamente (this no apuntará al objeto, sino al objeto global)
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    },
    estadoReservacion: function() {
        return this.pagado ? 'Reservación pagada' : 'Reservación pendiente';
    }
}

console.log(reservacion.nombre);
reservacion.informacion();