document.addEventListener("DOMContentLoaded", () => {
    let inputNombre = document.getElementById("inputNombre");
    let inputApellido = document.getElementById("inputApellido");
    let botonEnviar = document.getElementById("botonEnviar");
    let tablaCuerpo = document.getElementById("tablaCuerpo");

    let obtenerDocumentos = async () => {
        try {
            let response = await fetch("/datos");
            let documentos = await response.json();
            actualizarTabla(documentos);
        } catch (error) {
            console.error("Error al obtener documentos:", error);
        }
    };

    let enviarDocumento = async () => {
        let apellido = inputApellido.value;
        let nombre = inputNombre.value;
        if (apellido && nombre) {
            try {
                await fetch("/insertar", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ apellido, nombre }),
                });
                inputApellido.value = "";
                inputNombre.value = "";
                obtenerDocumentos();
            } catch (error) {
                console.error("Error al enviar documento:", error);
            }
        } else {
            alert("Por favor, complete ambos campos.");
        }
    };

    let actualizarTabla = (documentos) => {
        tablaCuerpo.innerHTML = "";
        documentos.forEach((documento) => {
            let fila = document.createElement("tr");
            let nombreCelda = document.createElement("td");
            let apellidoCelda = document.createElement("td");
            nombreCelda.textContent = documento.nombre;
            apellidoCelda.textContent = documento.apellido;
            fila.appendChild(nombreCelda);
            fila.appendChild(apellidoCelda);
            tablaCuerpo.appendChild(fila);
        });
    };

    botonEnviar.addEventListener("click", enviarDocumento);

    obtenerDocumentos();
});
