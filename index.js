
let num = 0;

const div = document.querySelector('#number');
const [decrement, increment] = document.querySelectorAll('.btn')

function updateDiv() {
div.innerHTML = num;
}

decrement.addEventListener('click', () => {
    num--;
    updateDiv();
})

increment.addEventListener('click', () => {
    num++;
    updateDiv();
})