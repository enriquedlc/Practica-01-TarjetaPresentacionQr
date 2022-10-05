# **_Tarjeta de Presentacion en React Native_**

### <p>El proyecto se basa en una **carta de presentación** donde pongo una foto con mi nombre, una breve descripción de mí y un código QR que redirige hacia mi repositorio de github.<p>

<br>

## Estructura del proyecto

<br>

- container
  - header
    - headerImage
    - headerText
  - description
    - descriptionText
  - qrCode

### container tiene 3 hijos:

<br>

- **header:** donde se encuentran '**headerImage**' donde están las especificaciones de la foto en cuestión y '**headerText**' características del nombre.

  - en **header** se indica como los hijos deben ser mostrados y ordenados.
    <br><br>

- **description:** está mi breve descripcion, tienendo como único hijo '**descriptionText**'.

- **qrCode:** tiene como único hijo el componente del código QR.
  <br><br>

## Desarrollo del programa

<br>
    
Dividí el programa en tres partes con ayuda de flex, así sabia que el programa cumplía con los requisitos pedidos.
- Para colocar la imagen en la aplicación y la dirección de la misma en el proyecto tuve que ayudarme de esta página.

    https://code.tutsplus.com/es/tutorials/understanding-the-image-component-in-react-native--cms-35877

<br>

Seguido de ello puse la foto, la redondeé como se pedía y por ultimo añadí mi nombre a **header**.
<br><br>

El siguiente paso fue escribir la descripción y centrarla un poco, para que así no se viese mal, ya que tocaba los bordes del dispositivo en el que lo realizaba. Use una propiedad llamada **_marginHorizontal_**.

Para finalizar instalé las dependencias indicadas

- expo add react-native-svg
- expo add react-native-qrcode-svg

Con esto pude completar la tarea de poner un código QR que redirigía a mi repositorio en github.
