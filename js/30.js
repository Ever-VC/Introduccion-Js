// Async / Await
function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');
        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

async function app() {
    try {
        const clientes = await descargarNuevosClientes();
        console.log(clientes);
    } catch (error) {
        console.log(error);
    }
}

app();
console.log('Este código no se bloquea');