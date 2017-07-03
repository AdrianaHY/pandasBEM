var parrafoUno = document.getElementById("parrafo1");
var botonUno = document.getElementById("boton1")
var parrafoDos = document.getElementById("parrafo2");
var botonDos = document.getElementById("boton2")
var botonRestaurar = document.getElementById("boton3");
var span = document.getElementsByClassName("close");



for (var i = 0; i < span.length; i++){
  span[i].addEventListener("click",cerrar);
}


function cerrar() {
  var div = this.parentElement;
  div.style.display = "none";
}


botonUno.addEventListener("click",mostrarParrafoUno);
botonUno.addEventListener("dblclick", ocultarParrafoUno);

function ocultarParrafoUno() {
  parrafoUno.style.visibility = "hidden";
}

function mostrarParrafoUno(){

  parrafoUno.style.visibility = "visible";

}

botonDos.addEventListener("click",mostrarParrafoDos);
botonDos.addEventListener("dblclick", ocultarParrafoDos);

function ocultarParrafoDos() {
  parrafoDos.style.visibility = "hidden";
}

function mostrarParrafoDos(){

  parrafoDos.style.visibility = "visible";

}

botonRestaurar.addEventListener("click", restaurar);

function restaurar(){
  for(var i=0; i < span.length; i++){
    span[i].parentElement.style.display= "inline-block";
  }
}
