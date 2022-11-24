//const event = new Event('click');
//console.log(event); 

const btn = document.querySelector('button');
const div = document.querySelector('#root')

const eventHandler = (event) => {
    if(event.currentTarget === document.body);
    event.stopPropagation();
    console.log('no buttons dog')
}
console.group();
btn.addEventListener('click', eventHandler, () => {
console.log('hello dog');
})
//div.addEventListener('click', eventHandler,{capture: true});
//document.body.addEventListener('click', eventHandler,{capture: true});
//window.addEventListener('click', eventHandler, {capture: true});
console.groupEnd()


//const event = new MouseEvent('click');
//btn.dispatchEvent(event);