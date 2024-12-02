// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];
console.table(numeros);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

const arreglo = ["Hola", 10, true, "si", null, {nombre: "Ever", trabajo: "Programador"}, [1, 2, 3]];
console.log(arreglo);

// Acceder a los valores de un arreglo
console.log(numeros[2]);
console.log(meses[3]);
console.log(arreglo[5].trabajo);

// Conocer la extension de un arreglo
console.log(numeros.length);

// Iterar un arreglo
meses.forEach(function(mes) {
    console.log(mes);
});

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

