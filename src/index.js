export default function(id, props = {}) {
    let $ = document,
        style = $.querySelector(`style#${id}`) || $.createElement("style");
    style.id = id;
    props = { id, cn: id, ...props };
    $.head.appendChild(style);
    return css =>
        (style.innerHTML = []
            .concat(css)
            .map(fn => fn(props))
            .join("\n"));
}
