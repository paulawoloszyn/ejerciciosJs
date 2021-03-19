function callback() {
    console.log("Hola callback");
};

function callback_maleducado() {
    // console.log("Hola pelotudo");
};

function mendaje(funcion) {
    funcion();
};

// const callback = () =>

mendaje(callback_maleducado);

