// Métodos de propiedad
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id: ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    crearPlayList: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlayList: {
        nombre: function(nombre) {
            console.log(`Reproduciendo la playlist: ${nombre}`);
        },
        autor: function(autor) {
            console.log(`Reproduciendo la playlist de ${autor}`);
        }
    }

}

reproductor.borrarCancion = function(id) {
    console.log(`Borrando canción con el id: ${id}`);
}

reproductor.reproducir(32);
reproductor.pausar();
reproductor.borrarCancion(32);
reproductor.crearPlayList('Heavy Metal');
reproductor.reproducirPlayList.nombre('Heavy Metal');
reproductor.reproducirPlayList.autor('Iron Maiden');