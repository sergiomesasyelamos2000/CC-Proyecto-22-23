# Configuraciones

A continuación, se detallarán las configuraciones necesarias tanto para el funcionamiento del gestor de tareas como el de los tests.

## Gestor de tareas

Para este hito se necesitará lanzar tanto los test como el proyecto.

Estas dos tareas serán indicadas en el fichero package.json de cada carpeta (backend y frontend), respectivamente.
Por un lado, el archivo _package.json_ correspondiente a la base de datos de nuestra aplicación es el siguiente:

![scripts](/docs/img/scriptsBackend.png)

Por otro lado, el archivo _package.json_ correspondiente a la parte frontend de nuestra aplicación es el siguiente:

![scripts](/docs/img/scriptsFrontend.png)


### Lanzar la API del proyecto (servidor)

Para compilar el proyecto, se crea una tarea _start_ que se le pasa el comando **nest start**. Este compando es el cliente de typescript que compilará el proyecto de acuerdo a lo configurado en el fichero de configuración [tsconfig.json](/backend/tsconfig.json).
En este fichero le indicaremos entre otros en que directorio volcará el resultado de la compilación, que en este caso será en el directorio **build**


### Lanzar los test de la API (servidor)

En el caso de los test indicaremos a npm que ejecute el cliente de test, es decir el cliente jest. Este cliente ejecutará los test de acuerdo a lo indicado en otro fichero de configuración de Jest donde se indicarán donde se encuentran los test para ejecutarlos entre otras cosas.

### Lanzar la parte cliente del proyecto

Para compilar el proyecto, se crea una tarea _start_ que se le pasa el comando **ng serve**. Este compando es el cliente de typescript que compilará el proyecto de acuerdo a lo configurado en el fichero de configuración [tsconfig.json](/frontend/tsconfig.json).
En este fichero le indicaremos entre otros en que directorio volcará el resultado de la compilación, que en este caso será en el directorio **build**


### Lanzar los test del cliente

Para lanzar los tests, se crea una tarea _cypress:open_ que se le pasa el comando **cypress open**.