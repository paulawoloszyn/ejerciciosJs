// Callbacks
// Son funciones que no se ejecutan en el momento.

// setTimeout(function () {
//   console.log("Hola");  
// }, 1000);

const getUsuarioByID = (id, callback) => {
    const usuario = {
        id: id,
        nombre: "Paula"
    }

    setTimeout(() => {
        callback(usuario)
    }, 1500)
}

getUsuarioByID(10, (usuarioo) => {
    console.log(usuarioo.nombre.toUpperCase());
});