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

La paginación se realiza mediante una validación ternaria en la cuál se comprueba que la página está dentro del rango válido. Seguido de eso se vuelve a llamar la función "fetch" que es la que vuelve a hacer la petición.

