//Strings o cadenas de texto
const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
const producto2 = String("Monitor de 19\"");
const correo = 'correo@correo';

console.log(tweet.length);
console.log(producto2);

//IndexOf (retorna la posición de la primera coincidencia)
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet'));

//Includes (retorna true o false si encuentra la palabra)'
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));
console.log(correo.includes('@'));