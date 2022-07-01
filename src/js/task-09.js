const colorBtn = document.querySelector('button.change-color')
const numberOfColor = document.querySelector('span.color')

colorBtn.addEventListener('click', () => {
  document.body.style.background = getRandomHexColor();
  numberOfColor.textContent = getRandomHexColor()
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
