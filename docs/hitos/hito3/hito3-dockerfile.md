# Dockerfile
En esta sección se llevará a cabo una descripción del archivo Dockerfile creado.
Para ello, se ha tenido en cuenta la guía de buenas prácticas proporcionada por [Docker](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/). Además, dado que se ha utilziado una imagen de node con base _alpine_ y se requieren diferentes paquetes para el correcto funcionamiento del contenedor de pruebas se ha seguido también esta [guía](https://dev.to/nodepractices/docker-best-practices-with-node-js-4ln4).

Las buenas prácticas seguidas son las siguientes:

1. En primer lugar, se indica el inicio de una etapa de construcción y se establece la imagen base:

```
FROM node:14.20-alpine As development
```

2. Se actualiza el contenedor y se elimina el directorio node_modules del directorio raíz del contenedor con el objetivo de ahorrar espacio puesto que más tarde se instalarán en otra ubicación:
```
RUN  apk update && apk upgrade  && rm -rf node_modules \
```
3. Establecemos un directorio de trabajo específico, en este caso en _/usr/src/app_:

```
WORKDIR /usr/src/app
```

4. Se copian los archivos _package.json_ en el directorio creado anteriormente:
```
COPY backend/package*.json ./
```

5. Se instalan las dependencia con  _npm install_, garantizando una instalación limpia de las dependencias. 
Además, se actualizan las dependencias y se procede a limpiar la caché una vez que se han instalado los módulos, todo ello con el objetivo de ahorrar espacio.
```
RUN npm install && npm update && npm cache clean --force
```

6. La instrucción CMD se usa de la forma CMD ["npm", "run", "test"] para ejecutar los tests asociados.