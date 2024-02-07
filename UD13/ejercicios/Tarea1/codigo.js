"use strict";
//Clase para crear un botón
class Boton {
    constructor(contador) {
        this.contador = contador;
        //Creamos un botón con JQuery
        const boton = $("<button>")
            //El texto será "Botón" + el número del contador
            .text(`Botón ${contador}`)
            //Cuando se hace clic, se ejecuta la alerta
            .on("click", () => {
            alert(`Soy el botón ${contador}`);
        });
        //Agregamos el botón al elemento con clase "zonaBotones"
        $(".zonaBotones").append(boton);
    }
}
//Clase principal para manejar la generación de botones
class GrupoBotones {
    constructor() {
        this.contador = 0;
    }
    //Este método se encargará de añadir botones
    add() {
        //Aumentamos el contador y creamos el botón con ese contador
        this.contador++;
        new Boton(this.contador);
    }
    //Este método se encargará de quitar botones
    rest() {
        //Disminuimos el contador y eliminamos el último botón creado con children().last()
        this.contador--;
        $(".zonaBotones").children().last().remove();
    }
}
//Instanciamos la clase GrupoBotones
const grupoBotones = new GrupoBotones();
//Manejo de eventos
$(function () {
    //Evento click para añadir botón
    $(".botonAdd").on("click", () => {
        grupoBotones.add();
    });
    //Evento click para quitar botón
    $(".botonDelete").on("click", () => {
        grupoBotones.rest();
    });
});
