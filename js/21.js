const metodoPago = 'efectivo';
switch (metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'Tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Aun no has pagado o metodo de pago no soportado');
        break;
}