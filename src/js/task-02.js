const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')
const markupEl = ingredients.map(item => {
  const itemsEl = document.createElement('li')
  itemsEl.textContent = item
  itemsEl.classList.add('item')
  return itemsEl
})
listEl.append(...markupEl)