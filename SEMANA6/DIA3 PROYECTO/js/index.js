'use strict';

const documentReady = () => {
    const pokemons = [];
    
    const formPokemons = document.getElementById('formPokemons');

    const createPokemon = (e) => {
        e.preventDefault();
        const documentFormPokemon = document.forms['formPokemons'];
        const name = documentFormPokemon.name.value;
        const type = documentFormPokemon.type.value;
        const hp = documentFormPokemon.hp.value;
        const attack = documentFormPokemon.attack.value;
        const special = documentFormPokemon.special.value;
        const imgurl = documentFormPokemon.imgurl.value;
        pokemons.push({ name, type, hp, attack, special, imgurl });
        console.log(pokemons);
        readPokemons();
    };

    const readPokemons = () => {
        
        const tBodyPokemons = document.getElementById('tBodyPokemons');
        tBodyPokemons.innerHTML = '';
        pokemons.forEach((element, index)=>{
            const { name, type, hp, attack, special, imgurl } = element;
            tBodyPokemons.innerHTML += `
            <tr>
                <td>${index}</td>
                <td>${name}</td>
                <td>${type}</td>
                <td>${hp}</td>
                <td>${attack}</td>
                <td>${special}</td>
                <td>
                    <img src="${imgurl}" class="img-fluid" style="max-width: 128px;" alt=""/>
                </td>
                <td>✏ 🗑</td>
            </tr>
            `;

        });
    };



    formPokemons.addEventListener('submit', createPokemon);
};

document.addEventListener('DOMContentLoaded', documentReady);