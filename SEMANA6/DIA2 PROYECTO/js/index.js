'use strict';

const documentReady = () =>{
    const buttonYes = document.getElementById('buttonYes');
    const buttonNo = document.getElementById('buttonNo');
    const heroTittle = document.getElementById('heroTittle');

    const getPartner = () =>{
        alert(' 🤭 Wow Somos PartNer 🥰');
        alert(' 🤗Tu me das vida y esperanza a mi vida 🤗');
        alert(' 🍺Quieres ir por unas chelitas 🍺');
        location.href = 'https://www.youtube.com/watch?v=3oir_abWPXA'
    };

    const brokenHeart = () => {
        buttonNo.style.top = Math.random() * innerHeight + 'px';
        buttonNo.style.left = Math.random() * innerWidth + 'px';
    };

    const partner = prompt('🥰 ¿Cual es your name? 🥰');
    heroTittle.innerText +=  ` ${partner || 'Anonimo' } ? 💕`; 

    buttonYes.addEventListener('click',getPartner);
    buttonNo.addEventListener('mouseover', brokenHeart);
};

document.addEventListener('DOMContentLoaded', documentReady);