const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones")
const alertValidacionesTexto =document.getElementById("alertValidacionesTexto")
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0)
const contadorProductos = document.getElementById("contadorProductos")
const totalProductos = document.getElementById("productosTotal"); 
const totalPrecio = document.getElementById("precioTotal")

let isValid = true;
let contador = 0;
let precio = 0;
let costoTotal = 0;
let totalEnProductos=0;

function validarCantidad(){
    if(txtNumber.value.length ==0){
        return false;
    }

    if(isNaN(txtNumber.value)){
        return false
    }

     return true;
}

function getPrecio(){
   return Math.round((Math.random()*1000))/100;    
}

btnAgregar.addEventListener("click", (e) =>{
    
    e.preventDefault();

    txtNombre.style.border=""
    txtNumber.style.border = ""
    alertValidaciones.innerHTML="";
    alertValidaciones.style.display = "none"
    isValid = true
    
    if(txtNombre.value.trim().length < 3){
        txtNombre.style.border = "solid red medium"
        alertValidaciones.innerHTML = "El nombre no es correcto"
        alertValidaciones.style.display = "block"
        isValid =  false;
    }

    if(! validarCantidad()){
        txtNumber.style.border = "solid red medium";
        alertValidacionesTexto.innerHTML+= "La cantidad no es correcta"
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    console.log(isValid)
    console.log(cuerpoTabla)

    if(isValid){
        contador++;
        precio = getPrecio();
        let row = `<tr>
                   <td>${contador}</td>
                   <td>${txtNombre.value}</td>
                   <td>${txtNumber.value}</td>
                   <td>${precio}</td>
        </tr>`
        cuerpoTabla.insertAdjacentHTML("beforeend",row);
        costoTotal += precio *Number(txtNumber.value);
        totalEnProductos += Number(txtNumber.value)
        contadorProductos.innerText = contador;
        totalProductos.innerText =totalEnProductos
        totalPrecio.innerText = costoTotal

        localStorage.setItem("contador", contador);
        localStorage.setItem("totalEnProductos",totalEnProductos);
        localStorage.setItem("costoTotal", costoTotal);

        txtNombre.value = "";
        txtNumber.value = "";
        txtNombre.focus();
    }//isValid

});

window.addEventListener("load", function(){
    if(this.localStorage.getItem("contador") != null){
        contador = Number(this.localStorage.getItem("contador"));
    }
    if(this.localStorage.getItem("totalEnProductos") != null){
        totalEnProductos = Number(this.localStorage.getItem("totalEnProductos"))
    }
    if(this.localStorage.getItem("costoTotal")!=null){
        costoTotal = Number(this.localStorage.getItem("costoTotal"));
    }
    contadorProductos.innerText = contador;
    totalProductos.innerText =totalEnProductos
    totalPrecio.innerText = "$ "+ costoTotal.toFixed(2);
    


});