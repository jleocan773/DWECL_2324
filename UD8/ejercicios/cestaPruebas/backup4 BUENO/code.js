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

class Cesta {
  constructor() {
    this.productos = [];
    this.cargarDatos();
  }

  agregarProducto(producto) {
    const indice = this.productos.findIndex(
      (p) => p.codigo === producto.codigo
    );

    if (indice !== -1) {
      // Si el producto ya está en la cesta, actualiza la cantidad
      this.productos[indice].cantidad += producto.cantidad;
    } else {
      // Si es un producto nuevo, agrégalo a la cesta
      this.productos.push(producto);
    }

    this.mostrarCesta();
    this.guardarCesta();
  }

  mostrarCesta() {
    const cestaTable = document.getElementById("cuerpoCesta");
    cestaTable.innerHTML = "";

    let total = 0;

    this.productos.forEach((producto) => {
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
      total += producto.calcularSubtotal();

      fila.appendChild(codigo);
      fila.appendChild(nombre);
      fila.appendChild(cantidad);
      fila.appendChild(precio);
      fila.appendChild(subtotal);

      cestaTable.appendChild(fila);
    });

    this.actualizarTotales(total);
  }

  actualizarTotales(total) {
    const totalElement = document.querySelector(".totalPrecio");
    const ivaElement = document.querySelector(".precioIVA");

    const totalConIVA = total + total * 0.21;

    totalElement.textContent = `Total: ${total}€`;
    ivaElement.textContent = `Total + IVA (21%): ${totalConIVA}€`;
  }

  cargarDatos() {
    const productosGuardados = localStorage.getItem("productos");
    if (productosGuardados) {
      this.productos = JSON.parse(productosGuardados);
      this.mostrarCesta(); // Mostrar los productos guardados al cargar la página
    }
  }

  guardarCesta() {
    localStorage.setItem("productos", JSON.stringify(this.productos));
  }
}

class ContProductos {
  constructor(productos) {
    this.productos = productos;
  }

  mostrarProductos() {
    const zonaProductos = document.getElementById("zonaProductos");

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
      inputCantidad.value = 1;

      const botonAñadir = document.createElement("button");
      botonAñadir.textContent = "Añadir";

      botonAñadir.addEventListener("click", () => {
        const nuevaCantidad = parseInt(inputCantidad.value, 10);

        const productoExistente = arrayProductos.productos.find(
          (p) => p.codigo === producto.codigo
        );

        if (productoExistente) {
          productoExistente.cantidad += nuevaCantidad;
        } else {
          const productoToAdd = new Producto(
            producto.codigo,
            producto.nombre,
            producto.precio,
            nuevaCantidad,
            producto.imagen
          );
          arrayProductos.agregarProducto(productoToAdd);
        }
        arrayProductos.mostrarCesta();
      });

      productoDiv.appendChild(imagen);
      productoDiv.appendChild(nombre);
      productoDiv.appendChild(precio);
      productoDiv.appendChild(inputCantidad);
      productoDiv.appendChild(botonAñadir);

      zonaProductos.appendChild(productoDiv);
    });

    // Llamada a mostrarCesta después de cargar productos iniciales
    arrayProductos.mostrarCesta();
  }
}

const arrayProductos = new Cesta();

document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    new Producto(
      1,
      "Bolso",
      20,
      0,
      "https://source.unsplash.com/random/250x250?purse"
    ),
    new Producto(
      2,
      "Chaqueta",
      30,
      0,
      "https://source.unsplash.com/random/250x250?jacket"
    ),
    new Producto(
      3,
      "Botas",
      40,
      0,
      "https://source.unsplash.com/random/250x250?boots"
    ),
    new Producto(
      4,
      "Gafas",
      15,
      0,
      "https://source.unsplash.com/random/250x250?glasses"
    ),
    new Producto(
      5,
      "Gato",
      25,
      0,
      "https://source.unsplash.com/random/250x250?cat"
    ),
    new Producto(
      6,
      "Perro",
      35,
      0,
      "https://source.unsplash.com/random/250x250?dog"
    ),
    new Producto(
      7,
      "Camaleón",
      100,
      0,
      "https://source.unsplash.com/random/250x250?chameleon"
    ),
    new Producto(
      8,
      "Galletas",
      2,
      0,
      "https://source.unsplash.com/random/250x250?cookies"
    ),
    (producto9 = new Producto(
      9,
      "Palmera",
      150,
      0,
      "https://source.unsplash.com/random/250x250?palmtree"
    )),
    // Agrega aquí el resto de tus productos
  ];

  const contProductos = new ContProductos(productos);
  contProductos.mostrarProductos();
});
