const boton = document.querySelector('#btn');

boton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es: ${resultado}`));
});

if (Notification.permission == 'granted') {
    new Notification('Esto es una notificación.', {
        icon: 'images/alert.png',
        body: 'Aprendiendo a programar en JavaScript'
    })
}