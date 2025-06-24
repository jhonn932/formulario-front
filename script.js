//Scrip para validacion de campos (prueba)
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const dni = document.getElementById('dni');
const correo = document.getElementById('correo');
const formulario = document.getElementById('registro');

const m_error1 = document.getElementById('mensajeError1');
const m_error2 = document.getElementById('mensajeError2');
const m_error3 = document.getElementById('mensajeError3');
const m_error4 = document.getElementById('mensajeError4');

//Funcion loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
});

function validarCampoTexto(input,errorM) {
    const valor = input.value.trim();
    let valido = true;

    if (!valor || valor.length < 3) {
        input.classList.remove("valido");
        input.classList.add("invalido");
        errorM.textContent = "El nombre es Invalido";
        valido = false;
    } else {
        input.classList.remove("invalido");
        input.classList.add("valido");
        errorM.textContent = "";
    }
    return valido;    
}

function validar_dni(input,error){
    const valor = input.value.trim();
    let valido = true;

    if (!valor || !/^\d+$/.test(valor) || valor.length < 7 ) {
        dni.classList.remove("valido");
        dni.classList.add("invalido");
        error.textContent = "El DNI es Invalido";
        valido = false;
    } else {
        dni.classList.remove("invalido");
        dni.classList.add("valido");
        error.textContent = "";
    }
    return valido;      
}

function validar_correo(input,errorM){
    const valor = input.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valido = true;

    if(valor.includes("@") && valor.length > 5 && regex.test(valor)) {
        correo.classList.remove("invalido");
        correo.classList.add("valido");
        errorM.textContent = "";
    } else {
        correo.classList.remove("valido");
        correo.classList.add("invalido");
        errorM.textContent = "Correo Invalido";
        valido = false;
    }
    return valido;
}

//input nombre listening
nombre.addEventListener("input", () => {
    validarCampoTexto(nombre,m_error1);
}); 
//input apellido listening
apellido.addEventListener("input", () => {
    validarCampoTexto(apellido,m_error2);
});
//input dni listening
dni.addEventListener("input", () => {
    validar_dni(dni,m_error3);
});
//input correo listening
correo.addEventListener("input", () => {
    validar_correo(correo,m_error4);
});

//Validacion antes de enviar los datos
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let Vnombre = validarCampoTexto(nombre,m_error1);
    let Vapellido = validarCampoTexto(apellido,m_error2);
    let Vdni = validarCampoTexto(dni,m_error3);
    let Vcorreo = validar_correo(correo,m_error4);


    if (Vnombre && Vapellido && Vdni && Vcorreo) {
        alert("Felicidades te has registrado exitosamente!");
        formulario.submit();
    } else {
        alert("Hay datos Incorrecto en el Registro!");
        return;
    }
});