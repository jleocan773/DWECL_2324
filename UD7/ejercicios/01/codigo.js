class Vehiculo {
	constructor() {
		this.validaMatricula();
		this.cambiarTituloDNI();
	}

	validaMatricula() {
		var matriculaInput = document.getElementById("form_matricula");

		matriculaInput.addEventListener("input", function () {
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
		var tituloDNI = document.getElementById("label_dni");
		var formDNI = document.getElementById("form_dni");

		formDNI.addEventListener("focus", function () {
			tituloDNI.textContent = "Editando DNI";
		});

		formDNI.addEventListener("blur", function () {
			tituloDNI.textContent = "DNI";
		});
	}
}

var vehiculo = new Vehiculo();

document
	.getElementById("form_matricula")
	.addEventListener("input", vehiculo.validaMatricula);

document.getElementById("form_dni").addEventListener("focus", function () {
	vehiculo.cambiarTituloDNI(true);
});

document.getElementById("form_dni").addEventListener("blur", function () {
	vehiculo.cambiarTituloDNI(false);
});
