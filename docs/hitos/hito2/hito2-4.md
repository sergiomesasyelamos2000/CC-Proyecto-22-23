# Hito 2: Tareas realizadas

## Contenidos

- [Desarrollo de las funciones CRUD y vistas para la gestión de libros](#crudBooks)
- [Desarrollo de las funciones CRUD y vistas para la gestión de usuarios](#crudUsers)
- [Creación del módulo de libros](#moduloLibros)
- [Creación del servicio para migrar los libros](#migrarLibros)
- [Documentación asociada a los gestores de tareas](#gestores)
- [Documentación asociada a los marcos de trabajo para pruebas](#frameworks)
- [Documentación asociada a las librerías de aserciones](#librerias)
- [Desarrollo de tests unitarios para los controladores _Book_ y _User_](#test1)
    - [Resultados obtenidos en la ejecución de los tests de Jest](#test11)
- [Desarrollo de tests unitarios para las vistas _Book_ y _User_](#test2)
    - [Resultados obtenidos en la ejecución de los tests de Cypress](#test22)
- [Información adicional](#info)

<a name="crudBooks"></a>

## Desarrollo de las funciones CRUD y vistas para la gestión de libros

Se ha llevado a cabo el desarrollo de las diferentes funcionalidades CRUD tanto en el servicio como en el controlador para la obtención de todos los libros (findAll), edición (update), creación de una nueva entrada de libro (create) y eliminación (delete). Adicionalemnte, se ha incluido la funcionadidad para poder buscar un libro por el título (findByProperty), añadiento tanto el componente como el servicio asociado al buscador [#55](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/55) y [#54](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/54). El desarrollo asociado a esta sección puede encontrarse en los siguientes _issues_:

- [#43](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/43)
- [#45](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/45)
- [#46](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/46)
- [#47](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/47)

En cuanto al componente y servicio del buscador:

- [#55](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/55)
- [#54](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/54)

<a name="crudUsers"></a>

## Desarrollo de las funciones CRUD y vistas para la gestión de usuarios

Se ha llevado a cabo el desarrollo de las diferentes funcionalidades CRUD tanto en el servicio como en el controlador para la obtención de todos los usuarios (findAll), edición (update), creación de una nueva entrada de usuario (create) y eliminación (delete). Además, se ha llevado a cabo la implementación tanto del componente de inicio de sesión (login) como de registro (sign-up). El desarrollo asociado a esta sección puede encontrarse en los siguientes _issues_:

- [#43](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/43)
- [#42](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/42)
- [#44](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/44)
- [#48](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/48)

A su vez, se ha desarrollado el módoulo para la gestión de la autenticación de usuarios, cuya implementación puede encontrarse en el siguiente _issue_:

- [#42](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/42)

<a name="moduloLibros"></a>

## Creación del módulo de libros

Se ha llevado a cabo la implementación del módulo de libros cuya estructura se puede encontrar [aquí](./../../backend/src/modules/books/book.entity.ts). El desarrollo asociado a esta sección puede encontrarse en los siguientes _issues_:

- [#39](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/39)


<a name="migrarLibros"></a>

## Creación del servicio para migrar los libros

Se ha llevado a cabo la implementación de la migración de libros hacia nuestra base de datos a través de un JSON obtenido de la realización de una gran cantida de consultas a APIs externas. El desarrollo asociado a esta sección puede encontrarse en los siguientes _issues_:

- [#40](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/40)
- [#41](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/41)


<a name="gestores"></a>

## Documentación asociada a los gestores de tareas

Se ha realizado la documentación del gestor de tareas empleado así como sus ventajas. Se puede leer la documentación [aquí](docs/hitos/hito2/hito2-1.md)


<a name="frameworks"></a>

## Documentación asociada a los marcos de trabajo para pruebas

Se ha realizado la documentación de los marcos de trabajo para pruebas empleados tanto en la parte backend de la aplicación como en la parte frontend. Se puede leer la documentación [aquí](docs/hitos/hito2/hito2-2.md)


<a name="librerias"></a>

## Documentación asociada a las librerías de aserciones

Se ha realizado la documentación de las librerías de aserciones empleados tanto en la parte backend de la aplicación como en la parte frontend. Se puede leer la documentación [aquí](docs/hitos/hito2/hito2-3.md)


<a name="test1"></a>

## Desarrollo de tests unitarios para los controladores _Book_ y _User_

Se han desarrollado diferentes tests unitarios para la comprobación de las distintas funcionalidades implementadas hasta el momento.
El desarrollo de los tests relacionados con Jest pueden visualziarse en el siguiente _issue_ [#57](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/57).

Además, [aquí](docs/hitos/hito2/hito2-4-1.md) podrás encontrar los tests realizados en esta sección.

<a name="test11"></a>

### Resultados obtenidos en la ejecución de los tests de Jest

Para ello, gracias a los _scripts_ configurados en el archivo package.json del frontend, haremos uso del siguiente comando para ejecutar los tests:

```
npm run test
```

Obteniendo los siguientes resultados:


```
> app-backend@0.0.1 test
> jest

 PASS  src/app.controller.spec.ts (11.834 s)
 PASS  src/modules/books/book.controller.spec.ts (10.432 s)
 PASS  src/modules/users/user.controller.spec.ts (11.121 s)

Test Suites: 0 failed, 3 passed, 3 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        33.335 s, estimated 35 s
Ran all test suites.
```

<a name="test2"></a>

## Desarrollo de tests unitarios para los vistas _Book_ y _User_

Se han desarrollado diferentes tests unitarios para la comprobación de las distintas funcionalidades implementadas hasta el momento.
El desarrollo de los tests relacionados con Cypress pueden visualziarse en el siguiente _issue_ [#58](https://github.com/sergiomesasyelamos2000/CC-Proyecto-22-23/issues/58).

Además, [aquí](docs/hitos/hito2/hito2-4-2.md) podrás encontrar los tests realizados en esta sección.

<a name="test22"></a>

### Resultados obtenidos en la ejecución de los tests de Cypress

Para ello, gracias a los _scripts_ configurados en el archivo package.json del frontend, haremos uso del siguiente comando para ejecutar los tests:

```
npm run cypress:open
```

Obteniendo los siguientes resultados:

<img src="./docs/img/testCypress.png" alt="drawing" width="300"/>

<a name="info"></a>

## Información adicional

Si desear encontrar información adicional referente a la configuación del gestor de tareas así como de los tests pusla [aquí](docs/hitos/hito2/hito2-4-3.md).



