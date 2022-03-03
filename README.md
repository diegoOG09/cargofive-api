# Consumo de Cargofive-API 🛳️

La aplicación fue construida con ViteJS/Vue3 y Visual Studio Code.

## Proceso desarrollado 🚀

### Componentes

La aplicación está basada en dos componentes los cuales son renderizados en App:
  1. Header
  2. Main

Primero desarrollé el componente Header, que contiene como su nombre lo dice el header de la página. He hecho una réplica del que se encuentra en la página de Cargofive para poner más en contexto la app.
Los enlaces no llevan a ningún lugar ya que solo son parte de la apariencia.

Como segundo componente desarrollé el de Main, que contiene el texto de "Consultar puertos", la barra de búsqueda y la tabla.

### Main

Dentro del `<template></template>` se tiene una etiqueta `<main></main>` la cual contiene el texto principal, la barra de búsqueda, la tabla y los botones de paginación.

En el `<script></script>` es donde sucede toda la magia(lógica). Lo primero que hice fue importar axios que es el cliente HTTP utilizado para las peticiones en esta aplicación.

La petición a la API se hace mediante el método GET de axios y se guarda en un array llamado "ports" que posteriormente será usado para iterar sobre él y desplegar toda la información en la tabla con ayuda de "v-for" y "v-bind:key".

#### Paginación

La paginación se realiza mediante una validación ternaria en la cuál se comprueba que la página está dentro del rango válido. Si eso se cumple, se vuelve a llamar la función "fetch" que vuelve a hacer la petición.

#### Filtros

Los filtros los que hice implementar a modo de una barra de búsqueda porque se me hace una buena forma de incluir varios parámetros en un solo lugar. La búsqueda puede realizarse mediante nombre, continente o país.
¿Cómo funciona por detrás? Tengo que aclarar que la búsqueda se hace mediante un parámetro que se pasa en la URL de la petición y solo trae la información del número de la página actual, no hace una búsqueda por todas las páginas ya que creo que es un uso más alto de recursos...
Para la búsqueda con filtros escribí una función llamada "portFilter" la cual retorna un array filtrado dependiendo lo que se pase en el parametro "search", ya sea nombre, pais o continente.
Cada vez que se cambia de página se realizar un suave scroll hasta arriba de la página para que el cambio no sea tan brusco y sea amigable con los usuarios.

#### Estilos

Los estilos fueron escritos en sintaxis de .scss y están basados principalmente en la gama de colores de Cargofive.

### Complicaciones en el proceso ⚠️

A lo largo de la etapa de desarrollo no hubo complicación alguna, pero al llegar a producción y querer desplegar la aplicación en algún servicio como Github pages, Netlify o Heroku tuve un error y fue el mismo en todos los servicios: la URL de la API no contaba con el protocolo HTTPS, solo con HTTP y eso hacía que el navegador tomara como insegura la página y no dejaba hacer el llamado a la API, por lo cuál la aplicación prácticamente no funcionaba.

¿Solución? 
En mi caso fue crear una pequeña aplicación en Rails con la gema "httparty" para apuntar la API original a Heroku y poder consumirla ya con HTTPS desde la URL de Heroku.
Pude haber dejado todo como estaba pero no quería que la persona que revisara el test se encontrara con errores en su navegador y no pudiera visualizar la aplicación.

## Setup de la aplicación para correrla desde código

  1. Clonar el repositorio
  2. Tener instalado ViteJS
  3. Instalar dependencias con "npm install"
  4. Correr el servidor con "npm run dev"
