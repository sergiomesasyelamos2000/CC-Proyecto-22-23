# Elección del contenedor base
Para llevar a cabo la elección del contenedor base a utilizar en función a las decisiones tomadas en el [Hito 2](./../hito2/hito2.md) y teniendo en cuentas tanto las herramientas como los _frameworks_ y lenguajes que se emplearán, es inevitable realizar una comparación de los diferentes tipos de imágenes que existen. De esta manera, los criterios de selección seguidos se han basado en el tamaño de la imagen, el tiempo de ejecución, funcionalidad y características incluidas. Por consiguiente, dado que el lenguaje utilizado es *node* se han contemplado las siguientes alternativas:

 - Imagen node:<version>
 - Imagen node:<version>-alpine
 - Imagen node:<version>-slim

## Imagen node:<version>
Se trata de la imagen oficial de *node*, la cual contiene todas las dependencias de node y ofrece soporte para una amplia gama de versiones. Además, está diseñaad y mantenida por un equipo de _Node_ dedicado ofreciendo la posibilidad de de usarse tanto como un contenedor para iniciar la aplicación como base para la construcción de otras imágenes. Se recomienda para aquellas personas que no tienen ningún conocimiento sobre los paquetes o requisitos necesarios y deseen instalarlos todos. Por lo tanto, se creará una imagen con base en la imagen oficial de _Node_ de la siguiente manera:

```
FROM node:14.20 As development

WORKDIR /usr/src/app

COPY backend/package*.json ./

RUN npm install && npm update && npm cache clean --force

COPY backend/. ./

CMD ["npm", "run", "test"] 
```

Por tanto, una vez creada la imagen se medirá el tiempo de ejecución a través del siguiente comando:

```
```

Obteniendo el siguiente resultado:

```
time docker run sergiomesasyelamos2000/cc-proyecto-22-23:node
```

## Imagen node:<version>-alpine
Esta imagen está basada en el popular proyecto Alpine Linux cuyop tamaño es mucho más pequeño que la mayoría de las imágenes base de distribución y, por lo tanto, conduce a imágenes mucho más ligeras en general. Esta variante es muy recomendable cuando se desea que el tamaño final de la imagen sea lo más pequeño posible puesto el usuario puede indicar en el archivo Dockerfile únicamente aquellas dependencias y paquetes que necesita.

```
FROM node:14.20-alpine As development

WORKDIR /usr/src/app

COPY backend/package*.json ./

RUN npm install && npm update && npm cache clean --force

COPY backend/. ./

CMD ["npm", "run", "test"] 
```

## Imagen node:<version>-slim
Esta imagen no contiene los paquetes comunes incluidos en la iamgen por defecto y solo contiene los paquetes mínimos necesarios para ejecutar _node_. Además, se encuentra dirigida a entornos y proyectos en los que la restricción de espacio es extremadamente importante, por lo que tiene ciertas similitudes con la anterior. 

```
FROM node:14.20-slim As development

WORKDIR /usr/src/app

COPY backend/package*.json ./

RUN npm install && npm update && npm cache clean --force

COPY backend/. ./

CMD ["npm", "run", "test"] 
```



