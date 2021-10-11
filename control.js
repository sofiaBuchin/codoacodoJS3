const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("error");
const error2 = document.getElementById("error2");
error.style.color = "red";
error2.style.color = "red";

function enviarFormulario() {  

    console.log("Enviando formulario..");

    if (!email.value.includes('@')) {
        error.innerHTML = "Debe contener arroba" } 
    
    if (password.value === '') {
        error2.innerHTML = "Debe ingresar una contraseña"
    }
     
}

