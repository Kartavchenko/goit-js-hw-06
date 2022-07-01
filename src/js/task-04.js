const clickPlus = document.querySelector('[data-action="increment"]');

const clickMinus = document.querySelector('[data-action="decrement"]');

const basicValue = document.querySelector('#value')

const counterValue = {value: 0, increment() {this.value += 1}, decrement() {this.value -= 1}};

clickMinus.addEventListener('click', () => {
    counterValue.decrement();
    basicValue.textContent = counterValue.value;
})

clickPlus.addEventListener('click', () => {
    counterValue.increment();
    basicValue.textContent = counterValue.value;
})
