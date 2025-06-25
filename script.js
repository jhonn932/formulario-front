//Scrip para validacion de campos
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
});

function validarCampos(input,error) {
    const id = document.getElementById(input);
    const valor = id.value.trim();
    const err = document.getElementById(error);
    const A = true;

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

//input nombre listening
nombre.addEventListener("input", () => {
    validarCampos('nombre','mensajeError1');
}); 
//input apellido listening
apellido.addEventListener("input", () => {
    validarCampos('apellido','mensajeError2');
});
//input dni listening
dni.addEventListener("input", () => {
    validarCampos('dni','mensajeError3');
});
//input correo listening
correo.addEventListener("input", () => {
    validarCampos('correo','mensajeError4');
});

//Validacion antes de enviar los datos
const form = document.getElementById('registro');
form.addEventListener("submit", function(e){
    e.preventDefault();

    validarCampos('nombre','mensajeError1');
    validarCampos('apellido','mensajeError2');
    validarCampos('dni','mensajeError3');
    validarCampos('correo','mensajeError4');

    alert("Felicidades te has registrado exitosamente!");
    form.submit();
});