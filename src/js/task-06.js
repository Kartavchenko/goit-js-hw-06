const inputLength = document.querySelector('[data-length="6"]');
const defaultColor = document.querySelector('#validation-input');

inputLength.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === + inputLength.dataset.length) {
        defaultColor.classList.remove('invalid');
        return defaultColor.classList.add('valid');
    } else {
        defaultColor.classList.remove('valid');
        return defaultColor.classList.add('invalid');
    }
})
