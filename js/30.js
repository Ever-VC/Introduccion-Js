// Async / Await
function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes... espere...');
        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function descargarUltimosdPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos... espere...');
        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 1000);
    });
}

async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosdPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        // Async Await con Promise.all
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosdPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error);
    }
}

app();
console.log('Este código no se bloquea');