//Declaramos la función
function cuantoshijos() {
    var mensaje;
    var numhijos = prompt("¿Número de hijos?");

    /* Aquí hacemos un if para en caso de que el usuario no introduzca un input 
       y aquí estoy escribiendo más porque si no, no tendría sentido usar este
       tipo de comentario  */
    if (numhijos == null || numhijos == "" || numhijos != Number) {
      mensaje = "No has introducido un número";
    } else {
      mensaje = "Tienes " + numhijos + " hijo/s";
    }
    alert(mensaje);
  }