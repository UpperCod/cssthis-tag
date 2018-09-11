# cssthis-tag

This small library (190B) takes advantage of the return of [**cssthis-parse**](https://github.com/UpperCod/cssthis-parse), to define the style for the tags created as web-components.

## css

Resemble the syntax already used for the css within the [**shadowDom**](https://developer.mozilla.org/en-US/docs/Web/CSS/:host).

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

It allows to import the css directly from a file, note the fact that the file ends in `.this.css`.

```js
import css from "./style.this.css";
import style from "cssthis-tag";

style("my-tag")(css);
```

## Output of the css in document.head

`:host` will be replaced by the name of the tag.

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

Consult the documentation of [**Cssthis**](https://github.com/UpperCod/cssthis), to know the installers of [**cssthis-parse**](https://github.com/UpperCod/cssthis-parse).
