const collection = document.getElementsByClassName('paragraph');
console.log(collection);

for (const p of collection) {
    p.style.color = 'green';
}

const btns = document.getElementsByTagName('button'); 
console.log(btns);

const arr = [...btns];
console.log(arr);


function hello() {
    console.log('Hello, Dog')
}
// Первый вариант 
//btns[0].addEventListener('click', hello);
//btns[1].addEventListener('click', hello);
//btns[2].addEventListener('click', hello);

// Второй вариант 
for(const btn of btns ) {
    btn.addEventListener('click', hello);
}