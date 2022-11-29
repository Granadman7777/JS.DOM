const box = document.querySelector('#box');

box.addEventListener('click', boxClickHandler);

function boxClickHandler(event) {
    const input = documents.createElement('input');
    input.addEventListener('keydown', inputKeyHandler);
    const parent = event.target.parentNode;
    parent.append(input)
}

function inputKeyHandler({target, target: {value,previosElementSibling}}) {
if(event.keyCode === 13) {
    // передать данные элементу (box)
    previosElementSibling.textContent = value;
    // Удаляем input при помощи keyCode 
    target.remove();
}
}
