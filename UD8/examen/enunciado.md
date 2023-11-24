Supuesto

Realizar una aplicación web que simule el alta de una serie de artículos de piel según los siguientes requisitos :

Se realizará mediante clases, es decir, basado en POO.

Estará compuesta por 3 clases, una primera clase padre (Articulo), una segunda clase (Cartera) que heredará de la primera, y una tercera clase (Base) que va a contener los atributos y métodos necesarios para el funcionamiento de la aplicación. 

La clase Articulo, va a contener 4 atributos (id, cod, color, piel) y su método constructor( ) correspondiente. El atributo id, será autonumérico incremental. 

La clase Cartera, va a contener los atributos heredados de la clase anterior, y va a añadir un nuevo atributo (bolsillo), además de su método constructor( ). Esta clase solo va a tener la función de ser instanciada generando nuevos objetos.

La clase Base, va a contener un atributo (array de objetos , #articulos), entre otros necesarios, en el que se va a ir añadiendo cada nuevo artículo “Cartera”, un método #fEvento( ) que va a establecer el o los controladores de eventos necesarios, y un último método #alta ( ), que va a contener el código necesario para interceptar el envío del formulario, añadir cada artículo al array de objetos (instanciando la clase Cartera), y finalmente mostrar el array en una tabla (como se muestra en la imagen capturada). Todo ello obteniendo los datos de los campos rellenos, y cada vez que pulsemos el botón “Dar de alta”.

Los controladores de eventos serán creados a partir del método addEventListener() 

Para facilitar el desarrollo, se entrega la archivo plantilla html , el cual será el único archivo que se entregará después de haber añadido el código JS necesario. 
