const inputName = document.querySelector('#name-input')
const showName = document.querySelector('#name-output')
inputName.addEventListener('input', (event) => {
    showName.textContent = event.currentTarget.value
    inputName.addEventListener('blur', () => {
    showName.textContent = "Anonymous"
})
})
