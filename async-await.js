// AWAIT: "OK JS, ESPERA AQUI HASTA QUE TENGAS LA RTA DE LA PROMESA, CUANDO LA TENGAS, ASIGNALA A DONDE SEA QUE LA NECESITEMOS."
// Lo negativo es que tiene que estar dentro de una fn o metodo asincrono.

// ASYNC: Que cualquier fn que lo ponemos como async devuelva una PROMESA automatica//.

const empleados = [
    {
        id: 1,
        nombre: "Facundo"
    },
    {
        id: 2,
        nombre: "Paula"
    },
    {
        id: 3,
        nombre: "Olivia"
    }
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
]
// GET EMPLEADO
const getEmpleado = (id, callback) => {
    
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject("No existe!");
    })
};

// GET SALARIO
const getSalario = (id, callback) => {
    
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject("No tiene salario, es pobre!");
    })
};

const id = 3;

const getInfo = async() => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `Nombre: ${empleado}, salario: ${salario}`;
        
    } catch (error) {
        throw error;
    }
}


getInfo(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))

