const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;

    if(auth) {
        resolve('Usuario Autenticado'); // El promise se cumple
    } else {
        reject('No se pudo iniciar sesión'); // El promise no se cumple
    }
});

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))

// Existen 3 valores posibles para un promise: fulfilled, rejected, pending
// fulfilled - El promise se cumplió
// rejected - El promise no se cumplió
// pending - No se ha cumplido y tampoco fue rechazado
