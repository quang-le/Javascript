const D = document;
const $ = D.querySelector.bind(D);
const $$ = (selector, startNode = D) => [...startNode.querySelectorAll(selector)];

let test = $('.stuff');
let test2 =$('div');
let test3 =$('#thing')

console.log(test);
console.log(test2);
console.log(test3);

tester = ()=>{
    $('.stuff').innerHTML= 'Class selection OK';
    $('p').innerHTML = 'tag selection OK';
    $('#thing').innerHTML= 'ID selection OK';
}
tester();

let player=$("input[name='choix']:checked").value; // does not work

console.log(player);