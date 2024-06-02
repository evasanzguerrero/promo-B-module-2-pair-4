'use strict';

const nameInput = document.querySelector('.js__input');
const parrafo = document.querySelector('.js__parrafo');
const btn = document.querySelector('.js__btn');


btn.addEventListener( 'click', (ev) => {
    ev.preventDefault('');

    const name = nameInput.value;

    const saludo = `Hola ${name}!`
    
    parrafo.innerHTML = saludo;
    
})
