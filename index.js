const div = document.createElement('div');
div.append('Hello, Dog') // Apend прокидывает в див текст
console.log(div);
// 
const body = document.body;
console.log(body); 
body.append(div);

const div2 = document.createElement('div').append('test');
div2.append('test');
div.appebd(div2);