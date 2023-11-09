document.addEventListener('DOMContentLoaded', function() {
    const matriculaInput = document.getElementById('form_matricula');

    matriculaInput.addEventListener('input', function(event) {
        const matriculaValue = matriculaInput.value;
        const matriculaPattern = /^[0-9]{4}[a-zA-Z]{3}$/;

        if (!matriculaPattern.test(matriculaValue)) {
            matriculaInput.style.borderColor = 'red';
        } else {
            matriculaInput.style.borderColor = ''; // Restablece el borde si cumple con el patrón
        }
    });
});
