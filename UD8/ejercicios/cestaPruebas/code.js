// code.js

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
  
    calcularTotal() {
      let total = 0;
      this.productos.forEach((producto) => {
        total += producto.calcularSubtotal();
      });
      return total;
    }
  }
  
  // Clase ArrayProductos
  class ArrayProductos {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  }
  
  // Instancia de ArrayProductos
  const arrayProductos = new ArrayProductos();
  
  // Ejemplos de productos
  const producto1 = new Producto(1, 'Bolso', 20, 0, 'https://source.unsplash.com/random/500x500?purse');
  const producto2 = new Producto(2, 'Chaqueta', 30, 0, 'https://source.unsplash.com/random/500x500?jacket');
  const producto3 = new Producto(3, 'Botas', 40, 0, 'https://source.unsplash.com/random/500x500?boots');
  const producto4 = new Producto(4, 'Gafas', 15, 0, 'https://source.unsplash.com/random/500x500?glasses');
  const producto5 = new Producto(5, 'Gato', 25, 0, 'https://source.unsplash.com/random/500x500?cat');
  const producto6 = new Producto(6, 'Perro', 35, 0, 'https://source.unsplash.com/random/500x500?dog');
  
  // Agregar productos al arrayProductos
  arrayProductos.agregarProducto(producto1);
  arrayProductos.agregarProducto(producto2);
  arrayProductos.agregarProducto(producto3);
  arrayProductos.agregarProducto(producto4);
  arrayProductos.agregarProducto(producto5);
  arrayProductos.agregarProducto(producto6);
  