function onMouseOver(div) {
    div.style.backgroundColor = "black";
    setTimeout(() => {
        div.style.backgroundColor = "white";
    }, 1500);
}
function onMouseEnter(div) {
    div.style.backgroundColor = "black";
}
function onMouseLeave(div) {
    setTimeout(() => {
        div.style.backgroundColor = "white";
    },1500);
}