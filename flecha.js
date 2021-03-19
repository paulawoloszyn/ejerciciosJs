// Funcion estandar
function sumar_1(a, b) {
    return a + b;
};

console.log(sumar_1(5,10));

// Funcion de flecha
const sumar = (a, b) => {
    return a + b;
};

console.log(sumar(5,20))

// SÓLO cuando el hay un return de una sola linea, como es este caso, se puede simplificar así:
const sumar_3 = (a, b) => a + b;
console.log(sumar_3(10,20))

const saludar = () => "hola mundo";
console.log(saludar())



