class Login {
    #usuarios = [
        { user: "Usuario1", pass: "Abcdefg1" },
        { user: "Usuario2", pass: "1234567A" },
        { user: "Usuario3", pass: "1A2q3g4p" },
    ];

    validacion(user, pass) {
        var usuarioLogin = this.#usuarios.find(
            (usuario) => usuario.user == user && usuario.pass == pass
        );

        if (usuarioLogin) {
            alert("Se ha iniciado la sesión");
        } else {
            alert("El usuario y/o contraseña es incorrecto");
        }
    }
}

function fEvento() {
    var usuario = document.getElementById("login").value;
    var contrasena = document.getElementById("password").value;

    var logeo = new Login();
    logeo.validacion(usuario, contrasena);
}
