let btn = document.getElementById('btn');
let body = document.getElementById('body');
let defaults = document.getElementsByClassName('.default-button');
function leftClick(){
    btn.style.left = '0';
    body.style.background = '#000';
}
function rightClick(){
    btn.style.left = '110px';
    body.style.background = 'Aquamarine';
}
function defaultClick(){
    body.style.background='DarkGrey'
}