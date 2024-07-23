# Encriptador de Textos

Esta es una aplicación web simple que permite encriptar y desencriptar textos utilizando un conjunto específico de reglas de encriptación. La aplicación está diseñada para funcionar solo con letras minúsculas y no admite letras con acentos ni caracteres especiales.

## Reglas de Encriptación

- La letra "e" se convierte en "enter"
- La letra "i" se convierte en "imes"
- La letra "a" se convierte en "ai"
- La letra "o" se convierte en "ober"
- La letra "u" se convierte en "ufat"

## Ejemplos

- "gato" se convierte en "gaitober"
- "gaitober" se convierte en "gato"

## Características

- Encriptar texto.
- Desencriptar texto.
- Mostrar un botón oculto con JavaScript.

## Requisitos

- Funciona solo con letras minúsculas.
- No se deben utilizar letras con acentos ni caracteres especiales.

## Cómo Usar

1. Clona este repositorio o descarga los archivos.

2. Abre el archivo `index.html` en tu navegador web.

3. Ingresa el texto que deseas encriptar o desencriptar en el campo de texto.

4. Haz clic en el botón "Encriptar" para encriptar el texto o en el botón "Desencriptar" para desencriptar el texto.

5. Para mostrar un botón oculto, haz clic en el botón "Mostrar Botón Oculto".

## Estructura del Proyecto

- Assets: Contiene todas las imagenes necesarias para el Proyecto.
- Style: Contiene el archivo css que se encarga de dar estilo a la página.
- index.html: Contiene la estructura de la página en HTML.
- app.js: Contiene las funciones encriptar()/desencriptar() en lenguaje JavaScript