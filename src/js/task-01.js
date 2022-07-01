const countСategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${countСategoriesEl.length}`);

countСategoriesEl.forEach((elm) => {
    return console.log(`Categories: ${elm.querySelector('h2').textContent}
    Elements: ${elm.querySelectorAll('li').length}`)
})

