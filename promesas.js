// Las promesas sirven mucho para evitar el callback hell, siempre y cuando se use bien.

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

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));
    
// getSalario(id)
//     .then(salario => console.log("Su salario es de: ", salario))
//     .catch(err => console.log(err));
    
getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then (salario => {
                console.log("El empleado", empleado, "cobra", salario)
            })
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))