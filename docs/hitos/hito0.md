# Hito 0
>Versión 0.1.0
## Contenidos

* [Descripción del proyecto](#item1)
* [Documentación adicional](#Additional)


<a name="item1"></a>
## Descripción del proyecto

### Descripción del problema

El proceso de decisión sobre el libro a leer siempre es un procedimiento tedioso y en la mayoría de ocasiones agotador para el lector, el cual llega a abandonar este proceso de búsqueda. Por consiguiente, con el objetivo de suplir este problema, se llevará a cabo un sistema para la gestión de libros que permita añadir, eliminar o editar los diferentes libros y novedades que se vayan lanzando al mercado con distintos parámetros como pueden ser el editor, autor, título, número de ISBN, tipo de libro, temática y sinopsis. La aplicación permitirá buscar libros a través de diferentes filtros como los mencionados anteriormente así como la posibilidad de establecer diversos estados para un libro como por ejemplo, "Favoritos", "Visto recientemente", "Leer ahora" o "He leído", entre otros.
De esta manera, en el sistema existen dos tipos de usuarios:

* Un usuario administrador el cual podrá realizar funciones como añadir, eliminar, actualizar o editar los parámetros de los libros mencionados anteriormente.
* Un usuario lector que puede consultar las novedades existentes en la actualidad, seleccionar libros favoritos y visualizarlos, qué libros ha visto recientemente, el idioma en el que se encuentra, la categoría a la que pertenece, qué autor/es han escrito el libro, etc.

### Lógica de negocio

La solución propuesta para resolver este problema es la creación de un sistema que recibirá una colección de libros con sus diferentes parámetros obtenidos de API's como [Google Books](https://developers.google.com/books/docs/v1/getting_started) o [Goodreads](https://www.goodreads.com/api) a partir de las cuales se podrá recuperar una gran cantidad de información (autor, editor, fecha de publicación, comentarios...) que le resultará de gran utilidad al lector.

### ¿ A quién beneficia?

 El sistema beneficiaría a:

 1. Usuarios lectores ya que podrán visualizar información relevante sobre una gran cantidad de libros, temáticas, autores, editores o fecha de publicación facilitando en gran medida el proceso de búsqueda.
 3. Empresas editoriales o administradores. Las editoriales o administradores podrán modificar o agregar información de manera sencilla e intuitiva sobre cualquier artículo.

### Nombre del proyecto

# :book: ReadBook :book:

<a name="Additional"></a>
## Documentación Adicional

En esta sección se muestra documentación adicional al proyecto que ha sido relevante para el desarrollo del mismo. Se explicará lo siguiente:

1. [Preparación inicial del entorno de trabajo](/docs/initial-preparation-environment.md)
2. [Licencia](/LICENSE)
