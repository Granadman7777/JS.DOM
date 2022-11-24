

function createDiv() {
    const div = document.createElement('div'); // cоздаем элемент в памяти 
    div.classList.add('box');
    div.append('hello dog');
    document.body.append(div); // присоединяем к родительскому элемнту 
}

const btn = document.querySelector('button');
btn.addEventListener('click', createDiv);