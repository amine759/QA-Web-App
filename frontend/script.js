const textBorder = document.getElementById('text');
textBorder.addEventListener('input',changeColor);

function changeColor(event) {
    const el = event.target;
    el.style.borderColor = "#93f729";
    console.log(el.value);
    if(el.value.length<1) {
        el.style.borderColor = "#0a1b2e";
    }
}
