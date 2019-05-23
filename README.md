# Federico Martin Init Template!

Kit de inicio para sitios web, con sass y gulp.

### Prerequisites

Para usarlo debemos tener instalado SASS y Gulp CLI

```
npm install gulp-cli -g
npm install -g sass
```

### Installing

Luego de clonar el repositorio necesitamos instalar los paquetes necesarios


```
npm install
```


Y ya tendremos el entorno funcionado

### Gulp Tasks

Podemos usar cualquiera de las tareas ya creadas.

```
gulp watch
gulp build 
```

### Deploy

Para que el build funcione correctamente debemos agregar comentarios dentro de nuestro archivo html (Ya estan agregados en el template).

El build incluye:
- Compresion de imagenes que se encuentren en la carpeta images.
- Minificado, concateneado y versionado de archivos css.
- Minificado, concateneado y versionado de archivos js.


CSS
```
<!-- build:css css/styles.css -->
<!-- Agregar estilos aca si queremos que se apliquen en el build /-->
<!-- endbuild -->
```
JS

```
<!-- build:js js/scripts.js -->
<!-- Agregar scripts aca si queremos que se apliquen en el build /-->
<!-- endbuild -->
```

