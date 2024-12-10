async function obtenerEmpleados() {
    url = '../database/empleados.json';
    // fetch(url)
    //     .then(respuesta => respuesta.json())
    //     .then(resultado => {
    //         // console.log(resultado.empleados);
    //         const { empleados } = resultado;
    //         empleados.forEach(empleado => {
    //             console.log(empleado.id);
    //             console.log(empleado.nombre);
    //             console.log(empleado.puesto);

    //             //document.querySelector('.contenido').textContent += empleado.nombre;
    //         });
    //     })
    //     .catch(error => console.log(error));

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const { empleados } = resultado;
    empleados.forEach(empleado => {
        console.log(empleado.id);
        console.log(empleado.nombre);
        console.log(empleado.puesto);
    });
}

obtenerEmpleados()