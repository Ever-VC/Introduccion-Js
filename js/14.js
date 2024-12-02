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

// Agregar elementos a un arreglo
numeros[5] = 60;
numeros.push(70);
numeros.push(80, 90, 100);

// Agregar al inicio
numeros.unshift(-30, -20, -10);
console.table(numeros);

// Eliminar elementos de un arreglo
numeros.pop();// Elimina el ultimo elemento
numeros.shift();// Elimina el primer elemento
meses.splice(2, 1);// Elimina un elemento en la posicion 2 del arreglo meses y solo un elemento
console.table(numeros);

// Rest Operator o Spread Operator
const nuevoArreglo = [...meses, "Junio"];
console.table(nuevoArreglo);