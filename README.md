# :book: ReadBook :book:

---

### Proyecto para la asignatura de Cloud Computing del Máster En Ingeniería Informática de la UGR.

Sistema de análisis de libros basado en opiniones de lectores

---

<img src="./docs/img/logo.png" alt="drawing" width="300"/>

## :pencil2: Descripción :pencil2:

El proceso de decisión sobre el libro a leer siempre es un procedimiento tedioso y en la mayoría de ocasiones agotador para el lector, el cual llega a abandonar este proceso de búsqueda. Por consiguiente, con el objetivo de suplir este problema, se llevará a cabo un sistema para la gestión de libros que permita añadir, eliminar o editar los diferentes libros y novedades que se vayan lanzando al mercado con distintos parámetros como pueden ser el editor, autor, título, número de ISBN, tipo de libro, temática y sinopsis. La aplicación permitirá buscar libros a través de diferentes filtros como los mencionados anteriormente así como la posibilidad de establecer diversos estados para un libro como por ejemplo, "Favoritos", "Visto recientemente", "Leer ahora" o "He leído", entre otros.
De esta manera, en el sistema existen dos tipos de usuarios:

- Un usuario administrador el cual podrá realizar funciones como añadir, eliminar, actualizar o editar los parámetros de los libros mencionados anteriormente.
- Un usuario lector que puede consultar las novedades existentes en la actualidad, seleccionar libros favoritos y visualizarlos, qué libros ha visto recientemente, el idioma en el que se encuentra, la categoría a la que pertenece, qué autor/es han escrito el libro, etc.

### Lógica de negocio

La solución propuesta para resolver este problema es la creación de un sistema que recibirá una colección de libros con sus diferentes parámetros obtenidos de API's como [Google Books](https://developers.google.com/books/docs/v1/getting_started) o [Goodreads](https://www.goodreads.com/api) a partir de las cuales se podrá recuperar una gran cantidad de información (autor, editor, fecha de publicación, comentarios...) que le resultará de gran utilidad al lector.

### ¿ A quién beneficia?

El sistema beneficiaría a:

1.  Usuarios lectores ya que podrán visualizar información relevante sobre una gran cantidad de libros, temáticas, autores, editores o fecha de publicación facilitando en gran medida el proceso de búsqueda.
2.  Empresas editoriales o administradores. Las editoriales o administradores podrán modificar o agregar información de manera sencilla e intuitiva sobre cualquier artículo.

---

## :pushpin: Descripción del problema a resolver y usos de git y GitHub:

- En el siguiente enlace se podrá acceder al [Hito 0](docs/hitos/hito0.md) donde se lleva a cabo toda la configuración y creación del repositorio así como del par de claves (pública y privda) y de la licencia empleada.

## :computer: Elaboración de código, HUs e hitos:

- En el siguiente enlace se podrá acceder al [Hito 1](docs/hitos/hito1.md) donde se define la estructura inicial del proyecto, elaborando distintas historias de usuario e hitos con el objetivo de describir un producto mínimamente viable. Además, se lleva a cabo la implementación de alguna de las clases el proyecto.

## :pencil2: Tests:

- En el siguiente enlace se podrá acceder al [Hito 2](docs/hitos/hito2/hito2.md) donde se define la elección y configuración del gestor de tareas, el uso de la biblioteca de aserciones así como el marco de pruebas empleado. Además, se proporciona diferente información como los tests unitarios realizados y su correspondencia con el avance de código.

## :whale: Docker: 

- En el siguiente enlace se podrá acceder al [Hito 3](docs/hitos/hito3/hito3.md) donde se define la elección y justificación del contenedor base y la creación del archivo Dockerfile siguiendo las buenas prácticas y adaptándolo de manera correcta a las clases y módulos del proyecto. Además, se proporciona la documentación asociada tanto a la subida del contendor a DockerHub como a la actualización automática así como el uso de registros alternativos y públicos como GitHub Container Registry.

## :scroll: CI - Integración Continua: 

- En el siguiente enlace se podrá acceder al [Hito 4](docs/hitos/hito4/hito4.md) donde se define la elección y justificación de los distintos sistemas de integración continua así como la configuración de algunos de ellos. Además, se proporciona la documentación asociada tanto a la creación del archivo de configuración de Circle CI como de GitHub Actions, todo ello haciendo uso y aprovechando el contenedor de Docker creado en el hito 3.