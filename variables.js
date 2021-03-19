// Diferencias entre const let y var

// Var crea una variable GLOBAL. Ya no se usa. CONST y LET crean variables dentro del scope.
var nombre = "Facu el más churro";

// Las const no se pueden redeclarar, son las livianas. Siempre empezar con const, y si despues hay que modificarlas, se cambia a LET.
const constante = "Hola";

// Let sí se puede modificar.
let bichi = "Facu";

if (true) {
    nombre = "Magneto";
}

console.log(nombre);