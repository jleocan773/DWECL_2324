//Cargamos los elementos interactuables del documento
document.addEventListener("DOMContentLoaded", () => {
  const nombreInput = document.getElementById("nombreInput");
  const apellidosInput = document.getElementById("apellidosInput");
  const enviarBtn = document.getElementById("enviarBtn");
  const cuerpoTabla = document.getElementById("cuerpoTabla");

  //Declaramos la función obtenerDocumentos, que se encargará de recibir los datos de mongoDB y de mostrarlos en la tabla
  async function obtenerDocumentos() {
    //Recibimos los datos de la base de datos desde la página /mostrarDatos
    const response = await fetch("/mostrarDatos");

    //Pasamos esta información a formato json
    const documentos = await response.json();

    //Ejecutamos la función actualizarTabla con estos datos
    actualizarTabla(documentos);
  }

  //Declaramos la función enviarDocumento(), que se encargará de enviar los datos del input al servidor
  async function enviarDocumento() {
    //Como hemos hecho un formulario, tenemos que parar el evento por defecto de envío de formulario
    event.preventDefault();
    //Pillamos el valor de los input
    const nombre = nombreInput.value;
    const apellidos = apellidosInput.value;

    //Si se ha introducido tanto nombre como apellidos, se añaden estos datos mediante /addDatos
    if (nombre && apellidos) {
      try {
        await fetch("/addDatos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nombre, apellidos }),
        });

        //Después de haber añadido este nuevo documento, volvemos a poner los input vacíos y volvemos a recupera todos los datos con obtenerDocumentos()
        nombreInput.value = "";
        apellidosInput.value = "";
        obtenerDocumentos();
      } catch (error) {
        console.error("Fallo al enviar documento: ", error);
      }
    } else {
      alert("Ambos campos son obligatorios.");
    }
  }

  //Declaramos la función actualizarTabla(), que se encargará de actualizar la tabla según los documentos recibidos
  function actualizarTabla(documentos) {
    //Limpiamos la tabla para que no se dupliquen los datos
    cuerpoTabla.innerHTML = "";

    //Para construir la tabl hacemos un bucle por cada documento
    documentos.forEach((documento) => {
      //Creamos una nueva fila, una celda para el nombre y otra para los apellidos
      const fila = document.createElement("tr");
      const nombreCelda = document.createElement("td");
      const apellidoCelda = document.createElement("td");

      //Asignamos el nombre y los apellidos a las celdas
      nombreCelda.textContent = documento.nombre;
      apellidoCelda.textContent = documento.apellidos;

      //Anidamos las celdas a la fila
      fila.appendChild(nombreCelda);
      fila.appendChild(apellidoCelda);

      //Anidamos la fila a la tabla
      cuerpoTabla.appendChild(fila);
    });
  }

  //Añadimos el evento enviarDocumento() cuando se pulsa el botón
  enviarBtn.addEventListener("click", enviarDocumento);

  //Ejecutamos la función obtenerDocumentos() al iniciar la página
  obtenerDocumentos();
});
