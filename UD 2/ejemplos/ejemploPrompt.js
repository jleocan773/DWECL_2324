function alerta() {
  var mensaje;
  var opcion = prompt("Introduzca su nombre:", "Juan");

  if (opcion == null || opcion == "") {
    mensaje = "Has cancelado o introducido el nombre vacío";
  } else {
    mensaje = "Hola " + opcion;
  }
  alert(mensaje);
}
