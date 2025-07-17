//Script loader.
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
});
//fin de script loader

function validarCampos(input,error) {
    const id = document.getElementById(input);
    const valor = id.value.trim();
    const err = document.getElementById(error);
    let A = true;

    switch (input) {
        case 'nombre':
        case 'apellido':    
            if (!valor || valor.length < 3) {
                id.classList.remove("valido");
                id.classList.add("invalido");
                err.textContent = "El nombre es Invalido";
                A = false;
            } else {
                id.classList.remove("invalido");
                id.classList.add("valido");
                err.textContent = "";
            }
            break;

        case 'dni':
            if (!valor || !/^\d+$/.test(valor) || valor.length < 7 ) {
                id.classList.remove("valido");
                id.classList.add("invalido");
                err.textContent = "El DNI es Invalido";
                A = false;
            } else {
                id.classList.remove("invalido");
                id.classList.add("valido");
                err.textContent = "";
            }
            break;
        
        case 'correo':
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(valor.includes("@") && valor.length > 5 && regex.test(valor)) {
                id.classList.remove("invalido");
                id.classList.add("valido");
                err.textContent = "";
            } else {
                id.classList.remove("valido");
                id.classList.add("invalido");
                err.textContent = "Correo Invalido";
                A = false;
            }
            break;
    }
    return A;
}

//cada input tiene su evento de validacion
nombre.addEventListener("input", () => {
    validarCampos('nombre','mensajeError1');
}); 
apellido.addEventListener("input", () => {
    validarCampos('apellido','mensajeError2');
});
dni.addEventListener("input", () => {
    validarCampos('dni','mensajeError3');
});
correo.addEventListener("input", () => {
    validarCampos('correo','mensajeError4');
});

//btn empezara deshabilitado.
const btn = document.getElementById('btn');
btn.disabled = true;

function todosTienenContenido() {
    const n = document.getElementById('nombre');
    const a = document.getElementById('apellido');
    const d = document.getElementById('dni');
    const c = document.getElementById('correo');
    return n.value && a.value && d.value && c.value;
}
function validarTodo() {
    const validoNombre = validarCampos('nombre','mensajeError1');
    const validoApellido = validarCampos('apellido','mensajeError2');
    const validoDni = validarCampos('dni','mensajeError3');
    const validoCorreo = validarCampos('correo','mensajeError4');
    return validoNombre && validoApellido && validoDni && validoCorreo;
}

//si todo esta correcto, habilita el boton.
const form = document.getElementById('registro');
form.addEventListener("input", () => {
    btn.disabled = true;

    if (todosTienenContenido()) {
        if (validarTodo()) {
            btn.disabled = false;
        }
    }
});