const sizeControl = document.querySelector('[type ="range"]')
const textSpan = document.querySelector('#text')

sizeControl.addEventListener('input', () => {
    textSpan.style.fontSize = sizeControl.value + "px";
})