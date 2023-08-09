function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


function ocultarBtnDanger(){
    document.getElementById("alert-danger").classList.remove("show")
  }

  function ocultarBtnSuccess(){
    document.getElementById("alert-success").classList.remove("show")

  }
const enviar = document.getElementById("regBtn")


function esValido (){
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email = document.getElementById("email").value
    let password1 = document.getElementById("password1").value
    let password2 = document.getElementById("password2").value
    let terminos = document.getElementById("terminos")
    
    if(nombre == "" || apellido == "" || email == "" || password1 == "" || password2 == "" || !terminos.checked || password1.length <= 6 || password1 != password2){
       console.log("algo anda mal..")
        showAlertError()
    }else{
        console.log("Todo OK")
        showAlertSuccess()
    }
}
enviar.addEventListener("click", esValido)
