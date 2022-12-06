# Actualización y subida de la imagen a DockerHub
Se ha empleado DockerHub para almacenar el contenedor de comprobación de los tests puesto que se trata de un servicio proporcionado por Docker que además de permitir realizar búsquedas y compartir imágenes de contenedores también permite llevar a cabo acciones programadas sobre un repositorio cargado, es decir, nos hemos ayudado de los _webhooks_ de _GitHub Actions_.
En nuestro caso, tal y como se ha comentado, se utilziará para alojar el contendor de test del proyecto, actualizando la iamgen de manera automática a través de un _Workflow_, el cual puede consultarse [aquí](.github/workflows/docker.yml).

Por consiguiente, se puede consultar un ejemplo de ejecución de la _Action_ [aquí]().

## Versiones _webhooks_
En cuanto a las versiones empleadas para los distintos usos del _Workflow_ se han seguido las recomendaciones más utilizadas por [comunidad](https://github.com/docker/login-action):
- actions/checkout@v2
- docker/login-action@v1
- docker/metadata-action@v3
- docker/build-push-action@v2

## Justificación del Workflow
En un primer momento, el _Workflow_ estaba programado para lanzarse únicamente cuando se realizaban cambios en el archivo Dockerfile. Sin embargo, es más conveniente que la _Action_ programada se lance cada vez que se realiza un _push_ sobre la rama principal, en esta caso sobre la rama _main_, lo cual se indica mediante las siguientes instrucciones:

```
# Se actualizará cuando se produzca algún cambio sobre la rama main
on:
  push:
    branches: [ main ]
```

A continuación, es necesario establecer el nombre de usuario (_username_) y la contraseña (_password_) de DockerHub en el apartado llamado *_Secrets_* de nuestro repositorio, lo que nos permitirá acceder a DockerHub de manera segura sin revelar datos secretos.

Posteriormente, se define un único _job_ que se ejecutará sobre la máquina de _ubuntu-latest_ y que realizará los siguientes pasos:

1. Nos situamos sobre nuestro repositorio.

```
- name: Check out the repo
        uses: actions/checkout@v2
```
2. Iniciamos sesión en DockerHub mediante los _secrets_ anteriormente configurados.

```
- name: Log in to Docker Hub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_PASSWORD }}
```
4. Se extraen los metadatos de la imagen que se va a publicar. Para ello, se hace uso de la _action_ *docker/metadata-action* que permite poder pasárselos a la _action_ que construye y publica la imagen.

```
- name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@v3
        with:
          images: sergiomesasyelamos2000/cc-proyecto-22-23
          tags: latest
```
5. Se construye la imagen y se publica en DockerHub. Para ello, se hace uso de la _action_ *docker/build-push-action*, la cual construye la imagen a partir del archivo Dockerfile. Además, se utiliza *_context_* para buscar este Dockerfile y sus archivos asociados en el directorio raíz de nuestro repositorio. Más tarde, puesto que *_push_* es igual a *_true_*, la imagen será publicada.

```
- name: Build and push Docker image
        uses: docker/build-push-action@v2
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
```
7. Por último, se lanzan los tests del contenedor de manera automática en caso de existir.

```
- name: Run docker tests
        run: docker run -t -v `pwd`:/app/test sergiomesasyelamos2000/cc-proyecto-22-23
```

Por consiguiente, podemos ver que la imagen ha sido subida correctamente a DockerHub:

![DockerHub](docs/img/dockerhub.png)

Además, la _Action_ programada en el repositorio también se comprueba de manera satisfactoria:

![Action1](docs/img/action2.png)


