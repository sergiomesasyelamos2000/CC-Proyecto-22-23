# Hito 1

> Versión 1.0.0

## Contenidos

- [Historias de usuario](#hus)
- [Milestones](#milestones)
- [Estructura inicial](#initialStructure)

<a name="hus"></a>

## Historias de usuario

A continuación, se definirán las siguientes historias de usuario:

- [HU1 - Como usuario quiero poder buscar libros por su nombre.](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/2)
- [HU2 - Como usuario quiero obtener diferente información sobre un libro a través del título.](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/3)
- [HU3 - Como desarrollador, quiero buscar un libro por el título y almacenar su información.](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/4)
- [HU4 - Como usuario, quiero modificar la reseña de un libro.](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/5)
- [HU5 - Como usuario administrador, quiero poder añadir, modificar o eliminar un libro y sus características.](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/6)

<a name="milestones"></a>

## Milestones

Posteriormente, se realizará una planificación del proyecto en diferentes _milestones_:

- [Hito 1: Definición y creación del proyecto.](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/milestone/1)
- [Hito 2: Creación de pruebas unitarias.](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/milestone/2)
- [Hito 3: Creación de contenedores para la realización de pruebas.](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/milestone/3)
- [Hito 4: Uso de integración continua.](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/milestone/4)
- [Hito 5: Creación de un microservicio.](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/milestone/5)
- [Hito 6: Preparación de un servicio con contenedores.](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/milestone/6)

<a name="initialStructure"></a>

## Estructura inicial

La estructura inicial del proyecto contendrá las siguientes clases o entindades:

- **Profile**: Define el tipo de usuario que accede al sistema, pudiéndose tratar de un usuario administrador o un usuario lector. Se encuentra en el [fichero](/libs/entity-data-models/src/entities/profile.entity.ts).
- **User**: Posee la información de un usuario del sistema así como el tipo de usuario (_profile_) que posee. Se encuentra definida en el [fichero](/libs/entity-data-models/src/entities/user.entity.ts).
- **Book**: Guarda la inforamción referente a un libro junto con funcionalidades básicas.Se encuentra definida en el [fichero](/libs/entity-data-models/src/entities/book.entity.ts).
- **Crud**: Guarda toda la información global que poseerá un objeto. Se encuentra definida en el [fichero](/libs/entity-data-models/src/entities/crud.entity.ts).

Además, se han definido diferentes clases de datos con el objetivo de especificar los parámetros concretos de distintas funcionalidades:

- **LogInDto**: Especifica los parámetros que empleará el usuario para identificarse. Se encuentra en el [fichero](/libs/entity-data-models/src/dtos/log-in.dto.ts).
- **SignUpDto**: Especifica los parámetros que empleará el usuario para registrarse en la aplicación. Se encuentra definida en el [fichero](/libs/entity-data-models/src/dtos/sign-up.dto.ts).
- **GetUserDto**: Especifica los parámetros que empleará el usuario administrador para visualizar los datos de un usuario concreto.Se encuentra definida en el [fichero](/libs/entity-data-models/src/dtos/user-get.dto.ts).
- **UpdateUserDto**: Especifica los parámetros que empleará el usuario para modificar sus datos personales. Se encuentra definida en el [fichero](/libs/entity-data-models/src/dtos/user-update.dto.ts).

<!-- - Books: Guarda toda la información obtenida del archivo JSON además de funcionalidades básicas. Se encuentra definida en el [fichero](/libs/entity-data-models/src/entities/crud.entity.ts). -->
