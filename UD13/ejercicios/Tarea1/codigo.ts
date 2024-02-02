interface generadorBotones {
	add(): void;
	rest(): void;
}

//Esta clase se encargará de crear los botones, además de las alertas
class Boton {
	constructor(contador: number) {
		//Creamos un botón con JQuery
		const boton = $("<button>")
			//El texto será Botón + el número del contador
			.text(`Botón ${contador}`)
			//Cuando se hace click, se ejecuta la alerta
			.on("click", () => {
				alert(`Soy el botón ${contador}`);
			});

		//Agregamos el botón a "zonaBotonees"
		$(".zonaBotonees").append(boton);
	}
}

class GrupoBotones implements generadorBotones {
	public contador: number = 0;

    //Este metodo se encargará de añadir botones
    add(): void {
        //Aumentamos el contador y creamos el botón con ese contador
        this.contador++;
        new Boton(this.contador);
    }

    rest(): void {
        
    }
}
