window.onload = ()=>{
    let formulario = document.querySelector("#registroForm");

    formulario.nombre.addEventListener("input",validarNombre);
    formulario.apellido.addEventListener("input",validarApellido);
    formulario.edad.addEventListener("input",validarEdad);
    formulario.telefono.addEventListener("input",validarTelefono);
    formulario.email.addEventListener("input",validarEmail);
    formulario.pass1.addEventListener("input",validarPass1);
    formulario.pass2.addEventListener("input",validarPass2);

    document.querySelector("#reset").addEventListener("click", function(){ //Cuando pulsamos el botón de borrar(reset)
        inputs = document.querySelectorAll("input"); //Array con todos los inputs del formulario
        inputs.forEach(element =>{ //Les quitamos la clase a todos los inputs
            element.classList.remove("errorInput");
            element.classList.remove("validoInput");

        });

        let mensajeError = document.querySelectorAll(".msn"); //Eliminamos los mensajes de error que pueda haber en pantalla
        mensajeError.forEach(mensaje =>{
            mensajeError.textContent = "";
        });
        
    });
}


function validarFormulario(){
    if (validarNombre() && validarApellido() && validarEdad() && validarEmail() && validarPass1() && validarPass2() && validarTelefono()) {
        return true;
    } else{
        return false;
    }
}

function validarNombre() {

    let nombre = document.querySelector("#nombre");
    let msnError = document.querySelector(".nombreError");

    if(!nombre.value.trim()){
        nombre.classList.add("errorInput");
        nombre.classList.remove("validoInput");
        msnError.textContent = "El nombre es obligatorio";
        return false;
    } else if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre.value)){
        nombre.classList.add("errorInput");
        nombre.classList.remove("validoInput");
        msnError.textContent = "Sólo puede contener letras y espacios";
        return false;
    } else{
        nombre.classList.add("validoInput");
        nombre.classList.remove("errorInput");
        msnError.textContent = "";
        return true;
    }

}

function validarApellido() {
    
    let apellido = document.querySelector("#apellido");
    let msnError = document.querySelector(".apellidoError");

    if(!apellido.value.trim()){
        apellido.classList.add("errorInput");
        apellido.classList.remove("validoInput");
        msnError.textContent = "El apellido es obligatorio";
        return false;
    } else if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido.value)){
        apellido.classList.add("errorInput");
        apellido.classList.remove("validoInput");
        msnError.textContent = "Sólo puede contener letras y espacios";
        return false;
    } else{
        apellido.classList.add("validoInput");
        apellido.classList.remove("errorInput");
        msnError.textContent = "";
        return true;
    }

}

function validarEdad() {
    
    let edad = document.querySelector("#edad");
    let msnError = document.querySelector(".edadError");

    if(isNaN(edad.value) || !edad.value.trim()){
        edad.classList.add("errorInput");
        edad.classList.remove("validoInput");
        msnError.textContent = "La edad sólo puede contener números";
        return false;
    } else if(edad.value < 18 || edad.value >= 100){
        edad.classList.add("errorInput");
        edad.classList.remove("validoInput");
        msnError.textContent = "Debe ser mayor de edad y menor que 100";
        return false;
    } else{
        edad.classList.add("validoInput");
        edad.classList.remove("errorInput");
        msnError.textContent = "";
        return true;
    }

}


function validarTelefono() {
    
    let telefono = document.querySelector("#telefono");
    let msnError = document.querySelector(".telefonoError");

    if(!telefono.value.trim()){
        telefono.classList.add("errorInput");
        telefono.classList.remove("validoInput");
        msnError.textContent="El teléfono sólo puede contener números";
        return false;
    } else if(!/^[6789]\d{8}$/.test(telefono.value)){
        telefono.classList.add("errorInput");
        telefono.classList.remove("validoInput");
        msnError.textContent="El teléfono sólo puede comenzar por 6,7,8 o 9 y tener 9 dígitos";
        return false;
    } else{
        telefono.classList.add("validoInput");
        telefono.classList.remove("errorInput");
        msnError.textContent="";
        return true;
    }

}

function validarEmail() {
    
    let email = document.querySelector("#email");
    let msnError = document.querySelector(".emailError");

    if(!email.value.trim()){
        email.classList.add("errorInput");
        email.classList.remove("validoInput");
        msnError.textContent = "El email es obligatorio";
        return false;
    } else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)){
        email.classList.add("errorInput");
        email.classList.remove("validoInput");
        msnError.textContent = "No es un formato de correo electrónico válido";
        return false;
    } else{
        email.classList.add("validoInput");
        email.classList.remove("errorInput");
        msnError.textContent = "";
        return true;
    }

}

function validarPass1() {

    let pass1 = document.querySelector("#pass1");
    let msnError = document.querySelector(".pass1Error");

    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pass1.value)){
        pass1.classList.add("errorInput");
        pass1.classList.remove("validoInput");
        msnError.textContent = "La contraseña debe contener mínimo 8 caracteres, 1 mayúscula. 1 minúscula y 1 número";
        return false;
    } else{
        pass1.classList.add("validoInput");
        pass1.classList.remove("errorInput");
        msnError.textContent = "";
        return true;
    }

}

function validarPass2() {
    
    let pass1 = document.querySelector("#pass1");
    let pass2 = document.querySelector("#pass2");
    let msnError = document.querySelector(".pass2Error");

    if(pass1.value != pass2.value){
        pass1.classList.add("errorInput");
        pass1.classList.remove("validoInput");
        pass2.classList.add("errorInput");
        pass2.classList.remove("validoInput");
        msnError.textContent = "Las contraseñas no coinciden";
        return false;
    } else{
        pass1.classList.add("validoInput");
        pass1.classList.remove("errorInput");
        pass2.classList.add("validoInput");
        pass2.classList.remove("errorInput");
        msnError.textContent = "";
        return true;
    }

}