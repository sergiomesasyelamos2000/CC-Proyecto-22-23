# Gestor de tareas
Para llevar a cabo la realización de este proyecto, se escogerá NPM como gestor de tareas frente a otras opciones populares como Grunt y Gulp. 

# NPM
NPM (Node Package Manager) es, como su propio nombre indica, el gestor de paquetes, módulos o librerías que nos proporciona Nodejs. Se trata de una herramienta que nos facilita el trabajo con librerías permitiéndonos instalar, actualizar y eliminar librerías de forma relativamente sencilla y automatizar la gestión de dependencias, actuando por tanto como un gestor de tareas.

Además, en el archivo *package.json* se le puede indicar una serie de scripts que se pueden ejecutar utilizando npm, lo que facilita en la mayor parte de los cassos la ejecución de tareas. Por ejemplo, en caso de que queramos lanzar los test realizados en la parte backend, bastará con emplear el siguiente comando:

```
npm run test
```

Esto se puede realizar puesto que el _framework_ empleado en la parte backend del sistema es el cliente por defecto del _framework_ de prueba empleado. A continación, se mostrará la estructura de algunos _scripts_ que se pueden utilizar a través de *npm* y que se corresponden con el contenido del archivo _package.json_:

```
"scripts": {
    "prebuild": "rimraf dist",
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  }
```

# Estilo elegido: TDD

Como estilo de desarrollo se ha optado por una metodología TDD puesto que el sistema trabajará con una gran cantidad de información referente tanto a usuarios como a libros, por lo que puede resultar tedioso y dificultar la validación de todos y cada uno de los campos o incluso que se incluyan en el sistema parámetros que no son correctos. Por esta razón, es más beneficioso comenzar pensando qué es lo que nos devuelve una funcionalidad antes de ponernos a programar.
Por consiguiete, en primer lugar se desarrollarán los tests que comprobarán las diferentes funcionalidades que se vayan incluyendo en el sistema y posteriormente, se procederá a su implementación respectivamente, aumentando con ello la calidad del código.



