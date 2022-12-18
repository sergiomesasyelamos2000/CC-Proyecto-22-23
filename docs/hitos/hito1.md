# :computer: Hito 1 :computer:

> Versión 1.0.1

## Contenidos

- [Historias de usuario](#hus)
- [Milestones](#milestones)
- [Estructura inicial](#initialStructure)
- [Justificación de los lenguajes y _frameworks_](#framework)

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

- **Profile**: Define el tipo de usuario que accede al sistema, pudiéndose tratar de un usuario administrador o un usuario lector. Se encuentra en el [fichero](./../../backend/src/modules/users/profile.entity.ts).
- **User**: Posee la información de un usuario del sistema así como el tipo de usuario (_profile_) que posee. Se encuentra definida en el [fichero](./../../backend/src/modules/users/user.entity.ts).
- **Book**: Guarda la inforamción referente a un libro junto con funcionalidades básicas.Se encuentra definida en el [fichero](./../../backend/src/modules/books/book.entity.ts).

Además, se han definido diferentes clases de datos con el objetivo de especificar los parámetros concretos de distintas funcionalidades:

- **LogInDto**: Especifica los parámetros que empleará el usuario para identificarse. Se encuentra en el [fichero](./../../backend/shared/dtos/user/user-login.dto.ts).
- **SignUpDto**: Especifica los parámetros que empleará el usuario para registrarse en la aplicación. Se encuentra definida en el [fichero](./../../backend/shared/dtos/user/user-create.dto.ts).
- **GetUserDto**: Especifica los parámetros que empleará el usuario administrador para visualizar los datos de un usuario concreto.Se encuentra definida en el [fichero](./../../backend/shared/dtos/user/user-get.dto.ts).
- **UpdateUserDto**: Especifica los parámetros que empleará el usuario para modificar sus datos personales. Se encuentra definida en el [fichero](./../../backend/shared/dtos/user/user-update.dto.ts).

<!-- Books: Guarda toda la información obtenida del archivo JSON además de funcionalidades básicas. Se encuentra definida en el [fichero](/libs/entity-data-models/src/entities/crud.entity.ts).-->

<a name="framework"></a>

## Justificación de los lenguajes y _frameworks_

EL lenguaje empleado para la realización del prpyecto será TypeScript. Este lenguaje es un superconjunto de JavaScript, un lenguaje agregado estáticamente para componer código JavaScript sencillo que ofrece composición, clases e interfaz estáticas discrecionales, y se cree que tiene una mejor organización del código y procedimientos de programación organizados por objetos.

Además, para la parte del servidor se hará uso de NodeJS el cual es un entorno de tiempo de ejecución de JavaScript cuya idea principal es usar el modelo de entrada y salida sin bloqueo y controlado por eventos para seguir siendo liviano y eficiente frente a las aplicaciones en tiempo real de uso de datos que se ejecutan en los dispositivos.

Se debe destacar que como gestor de paquetes se empleará _npm_ y como gestor de versiones de Node _nvm_.

Por un lado, para la parte del cliente se ha empleará el _framework_ de Angular mientras que para la parte _backend_, se utilizará NestJS.

Angular es un _framework frontend_ para crear aplicaciones híbridas y construido con TypeScript de Google. Además, permite a los desarrolladores crear aplicaciones para web, web móvil, móvil nativo y escritorio nativo. Hace uso de bibliotecas como _RxJS_ para trabajar de manera eficiente con grandes requisitos de datos.
Angular sigue una arquitectura basada en componentes donde una aplicación es un árbol de componentes encapsulados y poco acoplados con entradas y salidas definidas.
Para la instalación de Angular se debe ejecutar el siguiente comando:

```
npm install -g @angular/cli
```

A continuación, para la creación de la estrucutra frontend nuestra aplicación haremos uso de la CLI de Angular mediante el comando:

```
ng new frontend
```
Algunos de los comandos más relevantes a destacar son:

* Creación de un nuevo componente: 

```
ng generate component nuevoComponente
```

* Creación de un nuevo servicio: 

```
ng generate service miServicio
```

* Creación de una nueva clase: 

```
ng generate class miClase
```

* Creación de una nueva interfaz: 

```
ng generate interface miInterface
```

Por otro lado, NestJS es un _framework_ de NodeJS inspirado en Angular cuyo objetivo es crear fácilmente aplicaciones del lado del servidor eficientes y escalables. Está construido con TypeScript y le permite utilizar los conceptos de OOP (Programación Orientada a Objetos), FP (Programación Funcional) y FRP (Programación Reactiva Funcional), haciendo uso de herramientas como [Express](https://expressjs.com/) o [TypeORM](https://typeorm.io/).

Para la instalación de NestJS, en primer lugar se debe instalar a través del comando:

```
sudo apt install nodejs
```

Una vez instalado, se puede instalar la CLI de NestJS mediante la siguiente ejecución:

```
npm install -g @nestjs/cli
```

Además, para la creación de la estrucutra backend de la API de nuestro sistema haremos uso de la CLI de NestJS mediante el comando:

```
nest new backend
```
