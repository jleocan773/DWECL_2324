// Clase Producto

class Producto {
	constructor(codigo, nombre, precio, cantidad, imagen) {
		this.codigo = codigo;
		this.nombre = nombre;
		this.precio = precio;
		this.cantidad = cantidad;
		this.imagen = imagen;
	}

	calcularSubtotal() {
		return this.precio * this.cantidad;
	}
}

// Clase Cesta
class Cesta {
	constructor() {
		this.productos = [];
	}

	agregarProducto(producto) {
		this.productos.push(producto);
	}

	mostrarProductos() {
		const zonaProductos = document.getElementById("zonaProductos");
		zonaProductos.innerHTML = "";

		this.productos.forEach((producto) => {
			const productoDiv = document.createElement("div");
			productoDiv.classList.add("producto");

			const imagen = document.createElement("img");
			imagen.src = producto.imagen;

			const nombre = document.createElement("h3");
			nombre.textContent = producto.nombre;

			const precio = document.createElement("p");
			precio.textContent = `Precio: ${producto.precio}€`;

			const inputCantidad = document.createElement("input");
			inputCantidad.type = "number";
			inputCantidad.value = producto.cantidad;

			const botonAñadir = document.createElement("button");
			botonAñadir.textContent = "Añadir";
			botonAñadir.addEventListener("click", () => {
				const nuevaCantidad = parseInt(inputCantidad.value, 10);
				producto.cantidad = nuevaCantidad;
				arrayProductos.mostrarCesta(producto);
			});

			productoDiv.appendChild(imagen);
			productoDiv.appendChild(nombre);
			productoDiv.appendChild(precio);
			productoDiv.appendChild(inputCantidad);
			productoDiv.appendChild(botonAñadir);

			zonaProductos.appendChild(productoDiv);
		});
	}

	mostrarCesta(producto) {
		const cestaTable = document.getElementById("cuerpoCesta");

		// Crea la fila solo para el producto específico
		const fila = document.createElement("tr");

		const codigo = document.createElement("td");
		codigo.textContent = producto.codigo;

		const nombre = document.createElement("td");
		nombre.textContent = producto.nombre;

		const cantidad = document.createElement("td");
		cantidad.textContent = producto.cantidad;

		const precio = document.createElement("td");
		precio.textContent = producto.precio;

		const subtotal = document.createElement("td");
		subtotal.textContent = producto.calcularSubtotal();

		fila.appendChild(codigo);
		fila.appendChild(nombre);
		fila.appendChild(cantidad);
		fila.appendChild(precio);
		fila.appendChild(subtotal);

		// Agrega la nueva fila al final de la tabla
		cestaTable.appendChild(fila);

		// Actualiza los totales
		this.actualizarTotales();
	}

	actualizarTotales() {
		const totalElement = document.querySelector(".totalPrecio");
		const ivaElement = document.querySelector(".precioIVA");

		const total = this.calcularTotal();
		const totalConIVA = this.calcularTotalConIVA();

		totalElement.textContent = `Total: ${total}€`;
		ivaElement.textContent = `Total + IVA (21%): ${totalConIVA}€`;
	}

	calcularTotal() {
		return this.productos.reduce((total, producto) => {
			return total + producto.calcularSubtotal();
		}, 0);
	}

	calcularTotalConIVA() {
		const total = this.calcularTotal();
		const iva = 0.21; // Cambia esto si el porcentaje de IVA es diferente
		return total + total * iva;
	}
}

// Instancia de ArrayProductos
const arrayProductos = new Cesta();

// Ejemplos de productos
const producto1 = new Producto(
	1,
	"Bolso",
	20,
	0,
	"https://source.unsplash.com/random/250x250?purse"
);
const producto2 = new Producto(
	2,
	"Chaqueta",
	30,
	0,
	"https://source.unsplash.com/random/250x250?jacket"
);
const producto3 = new Producto(
	3,
	"Botas",
	40,
	0,
	"https://source.unsplash.com/random/250x250?boots"
);
const producto4 = new Producto(
	4,
	"Gafas",
	15,
	0,
	"https://source.unsplash.com/random/250x250?glasses"
);
const producto5 = new Producto(
	5,
	"Gato",
	25,
	0,
	"https://source.unsplash.com/random/250x250?cat"
);
const producto6 = new Producto(
	6,
	"Perro",
	35,
	0,
	"https://source.unsplash.com/random/250x250?dog"
);
const producto7 = new Producto(
	7,
	"Camaleón",
	100,
	0,
	"https://source.unsplash.com/random/250x250?chameleon"
);
const producto8 = new Producto(
	8,
	"Galletas",
	2,
	0,
	"https://source.unsplash.com/random/250x250?cookies"
);
const producto9 = new Producto(
	9,
	"Palmera",
	150,
	0,
	"https://source.unsplash.com/random/250x250?palmtree"
);

// Agregar productos al arrayProductos
arrayProductos.agregarProducto(producto1);
arrayProductos.agregarProducto(producto2);
arrayProductos.agregarProducto(producto3);
arrayProductos.agregarProducto(producto4);
arrayProductos.agregarProducto(producto5);
arrayProductos.agregarProducto(producto6);
arrayProductos.agregarProducto(producto7);
arrayProductos.agregarProducto(producto8);
arrayProductos.agregarProducto(producto9);

// Para mostrar los productos
document.addEventListener("DOMContentLoaded", () => {
	arrayProductos.mostrarProductos();
});
