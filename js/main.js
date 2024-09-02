const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones")
const alertValidacionesTexto =document.getElementById("alertValidacionesTexto")

function validarCantidad(){
    if(txtNumber.value.length ==0){
        return false;
    }

    if(isNaN(txtNumber.value)){
        return false
    }

     return true;
}

btnAgregar.addEventListener("click", (e) =>{
    
    e.preventDefault();

    txtNombre.style.border=""
    txtNumber.style.border = ""
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display = "none"
    
    if(txtNombre.value.trim().length < 3){
        txtNombre.style.border = "solid red medium"
        alertValidaciones.innerHTML = "El nombre no es correcto"
        alertValidaciones.style.display = "block"
        return false;
    }

    if(! validarCantidad()){
        txtNumber.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML+= "La cantidad no es correcta"
        alertValidaciones.style.display = "block";
    }
    

});