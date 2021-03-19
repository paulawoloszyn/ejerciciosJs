// Callback hell: muchos cb anidados.

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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => {
        return e.id === id;
    })
    
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
};

const getSalario = (id, callback) => {
    const plata = salarios.find((s) => {
        return s.id === id;
    })
    
    if (plata) {
        callback(null, plata);
    } else {
        callback(`No existe salario para empleado con id ${id}`);
    }
};


getEmpleado(3, (err, empleado) => {
    if (err) {
        console.log("Error!");
        return console.log(err);
    }

    console.log("Empleado existe!");
    console.log(empleado);
});

getSalario(3, (err, salario) => {

    console.log("Salario: " + salario);
});