export default function(id, props) {
    let style =
        document.querySelector(`style#${id}`) ||
        document.createElement("style");
    style.id = id;
    props = { id, cn: id, ...props };
    return css =>
        (style.innerHTML = []
            .concat(css)
            .map(fn => fn(props))
            .join("\n"));
}
