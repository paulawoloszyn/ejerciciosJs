

const deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneracion",
    getNombre: function () {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
};
// // Esto equivale
// console.log(deadpool.getNombre());

// // A esto
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// Tambien a esto, que es la desestructuracion para extraer info.
// const {nombre, apellido, poder, edad = 0} = deadpool;
// console.log(nombre,apellido,poder, edad);

// La desestructuración tb se puede hacer por argumentos de una funcion.
function imprimeHeroe({nombre, apellido, poder, edad = 0}) {
    console.log(nombre,apellido,poder, edad);   
}

// imprimeHeroe(deadpool);

// Como desestructurar arreglos
const heroes = ['Deadpool', 'Superman', 'Batman'];
// const h1 = heroes[0];
// Codifica a cada elemento con un nombre que ponemos acá.
const [h1, h2,h3] = heroes;

// Como se hace para decirle que solo quiero a batman? con comas.
const [, ,h3] = heroes;
console.log(h3);