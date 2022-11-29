const form = document.getElementById('form');
const root = document.getElementById('root');

const state = []; // Тут будут Таски 
 
form.addEventListener('submit',addItem);

function addItem(event) {
    event.preventDefault();
    const {target: {textInput: {value}}} = event;
    state.push(value);
    const li = createItem(value);
    root.append(li);
    target.reset()
}

function createItem(value) {
    const li = document.createElement('li');
    li.append(value);
    li.classList.add('item');
    return li;
}