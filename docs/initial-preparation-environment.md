## :rocket: Preparación inicial del entorno de trabajo :rocket: 

Este documento abarca los pasos seguidos para la preparación del entorno de trabajo con las herramientas git y github, con el objetivo de usar los repositorios creados de forma correcta para el desarrollo del proyecto de la asignatura y la realización de las diferentes entregas.


### Creación de los repositorios

- [Fork del Repositorio de Cloud Computing 21-22](https://github.com/ccvaillant1992/CC-21-22): Fork realizado al repositorio de la asignatura de Cloud Computing a mi cuenta de github  
- [Repositorio del Proyecto](https://github.com/ccvaillant1992/SearchFood-ForPet): Repositorio que contiene el proyecto a desarrollar en la asignatura  

### Creación de claves y subida de clave pública a GitHub

Generar una nueva clave SSH para usar para la autenticación y luego agregarla al ssh-agent.

![keys](./img/keys.png)

Para usar la clave SSH nueva generada, también agregar a la cuenta de GitHub.

![addKeys](./img/addKeys.png)

### Configuración de nombre y correo electrónico para que apareza en los commits

```
$ git config --global user.name "Cristina"
$ git config --global user.email cristinac.vaillant@example.com

$ git config --list

user.name=Cristina
user.email=cristinac.vaillant@gmail.com

```

### Activar el segundo factor de autenticación

Habilitar la autenticación de dos factores (2FA) como capa adicional de seguridad que se utiliza al iniciar sesión en sitios web o aplicaciones. 
Como segunda forma de autenticación para GitHub, enviar un código como mensaje de texto (SMS). 

![auth](./img/auth.png)