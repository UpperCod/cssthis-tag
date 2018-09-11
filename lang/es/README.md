# cssthis-tag

Esta pequeña librería(190B) aprovecha el retorno de [**cssthis-parse**](https://github.com/UpperCod/cssthis-parse), para definir el estilo para las etiquetas creadas como web-componentes.

## css
Asemeja la sintaxis ya usada para el css dentro del [**shadowDom**](https://developer.mozilla.org/en-US/docs/Web/CSS/:host).
```css
:host{
   width : 100px;
   height : 100px;
}

button{
   border:1px solid black;
   background : transparent;
}
```

##js
Permite importar el css directamente de un fichero, note el hecho de que el fichero termina en `.this.css`.
```js
import css from "./style.this.css";
import style from "cssthis-tag";

style("my-tag")(css);
```

## Salida del css en document.head
`:host` será reemplazado por el nombre de la etiqueta.
```css
my-tag{
   width : 100px;
   height : 100px;
}

my-tag button{
   border:1px solid black;
   background : transparent;
}
```

Consulte la documentación de [**Cssthis**](https://github.com/UpperCod/cssthis), para conocer los instaladores de [**cssthis-parse**](https://github.com/UpperCod/cssthis-parse).
