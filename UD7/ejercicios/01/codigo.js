class Vehiculo {
	constructor() {
		this.validaMatricula();
		this.cambiarTituloDNI();
	}

	validaMatricula() {
		// Obtengo el campo de matricula
		var matriculaInput = document.getElementById("form_matricula");

		// Pongo un patrón en mi HTML, hago un oyente para el input del campo.
		matriculaInput.addEventListener("input", function () {
			//Si el patrón no concuerda muestro un mensaje customizado
			if (matriculaInput.validity.patternMismatch) {
				matriculaInput.setCustomValidity(
					"Ingrese una matrícula válida (4 números y 3 letras)"
				);
			} else {
				matriculaInput.setCustomValidity("");
			}
		});
	}

	cambiarTituloDNI() {
		// Obtengo los dos campos del DNI, el título y el campo
		var tituloDNI = document.getElementById("label_dni");
		var formDNI = document.getElementById("form_dni");

		// Cuándo el campo está activo (se le hace clic), cambio el título
		formDNI.addEventListener("focus", function () {
			tituloDNI.textContent = "Editando DNI";
		});

		// Lo devuelvo a la normalidad cuándo se hace clic fuera del campo
		formDNI.addEventListener("blur", function () {
			tituloDNI.textContent = "DNI";
		});
	}

}



var vehiculo = new Vehiculo();
