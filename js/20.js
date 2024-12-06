const puntaje = 1000;

if (puntaje === 1000) {
    console.log('Si es igual...');
} else {
    console.log('No es igual...');
}

if (puntaje !== 1000) {
    console.log('Si es diferente...');
} else {
    console.log('No es diferente...');
}

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
    console.log('El usuario puede pagar...');
} else {
    console.log('Fondos insuficientes...');
}

const rol = 'editor';

if (rol === 'admin') {
    console.log('Acceso total...');
} else if (rol === 'editor') {
    console.log('Acceso limitado...');
} else {
    console.log('No tienes acceso...');
}