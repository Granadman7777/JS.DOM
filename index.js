const field = document.querySelector('#game-field');
const box = document.querySelector('#box');
const divCounter = document.querySelector('#counter')

let counter = 0;

field.addEventListener('click', clickHandler, {capture: true});

function clickHandler(event) {
    const {currentTarget, target, currentTarget:{children: {box}}} = event;
    if(event.currentTarget !== target) {   
       updateCounter();
    }

    box.style.top = `${randomCoodinates(currentTarget.offsetHeight)}px`
    box.style.left = `${randomCoodinates(currentTarget.offsetHeight)}px`
}

function updateCounter() {
    divCounter.textContent = ++counter;
} 

function rendomCoordinates(max) {
    return Math.floor(Math.random() * max);
}