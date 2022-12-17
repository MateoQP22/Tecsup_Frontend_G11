'use strict';

const POKEMONS_CRUD_DATA = 'pokemons-crud';
const pokemons = JSON.parse(localStorage.getItem(POKEMONS_CRUD_DATA)) ?? [];

const createPokemon = (e) => {
  const documentFormPokemon = document.forms['formPokemons'];
  const name = documentFormPokemon.name.value;
  const type = documentFormPokemon.type.value;
  const hp = documentFormPokemon.hp.value;
  const attack = documentFormPokemon.attack.value;
  const special = documentFormPokemon.special.value;
  const imgurl = documentFormPokemon.imgurl.value;
  pokemons.push({ name, type, hp, attack, special, imgurl });
  localStorage.setItem(POKEMONS_CRUD_DATA, JSON.stringify(pokemons));
  readPokemons();
};

const readPokemons = () => {

  const tBodyPokemons = document.getElementById('tBodyPokemons');
  tBodyPokemons.innerHTML = '';
  pokemons.forEach((element, index) => {
    const { name, type, hp, attack, special, imgurl } = element;
    tBodyPokemons.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${name}</td>
            <td>${type}</td>
            <td>${hp}</td>
            <td>${attack}</td>
            <td>${special}</td>
            <td>
                <img src="${imgurl}" class="img-fluid" style="max-width: 128px;" alt=""/>
            </td>
            <td>
                <button class="btn btn-info m-1"
                    onclick="readPokemon(${index})">✏
                </button>
                <button class="btn btn-danger"
                    onclick="deletePokemon(${index})">🗑
                </button>
            </td>
        </tr>
        `;
  });
};

const readPokemon = (index) => {
  // const pokemon = pokemons.find((_, i) => {
  // return i === index;
  // });
  const pokemon = pokemons.slice(index, index + 1)[0];
  const { name, type, hp, attack, special, imgurl } = pokemon;
  const documentFormPokemon = document.forms['formPokemons'];
  documentFormPokemon.index.value = index;
  documentFormPokemon.name.value = name;
  documentFormPokemon.type.value = type;
  documentFormPokemon.hp.value = hp;
  documentFormPokemon.attack.value = attack;
  documentFormPokemon.special.value = special;
  documentFormPokemon.imgurl.value = imgurl;
  document.getElementById('button').innerText = 'Editar';
};

const updatePokemon = (index) => {
  const documentFormPokemon = document.forms['formPokemons'];
  const name = documentFormPokemon.name.value;
  const type = documentFormPokemon.type.value;
  const hp = documentFormPokemon.hp.value;
  const attack = documentFormPokemon.attack.value;
  const special = documentFormPokemon.special.value;
  const imgurl = documentFormPokemon.imgurl.value;
  pokemons.splice(index, 1, { name, type, hp, attack, special, imgurl });
  localStorage.setItem(POKEMONS_CRUD_DATA, JSON.stringify(pokemons));
  documentFormPokemon.reset();
  readPokemons();
  document.getElementById('button').innerText = 'Crear';
};

const deletePokemon = (index) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success mx-1',
      cancelButton: 'btn btn-danger mx-1'
    },
    buttonsStyling: false
  })

  swalWithBootstrapButtons.fire({
    title: '¿Estás seguro?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '¡Sí, elimínalo!',
    cancelButtonText: '¡No, cancélalo!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      pokemons.splice(index, 1);
      localStorage.setItem(POKEMONS_CRUD_DATA, JSON.stringify(pokemons));
      readPokemons();
      swalWithBootstrapButtons.fire(
        '¡Eliminado!',
        'Tu registro ha sido eliminado',
        'success'
      )
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelado',
        'Tu registro está seguro :)',
        'error'
      )
    }
  })
};

const documentReady = () => {

  const formPokemons = document.getElementById('formPokemons');

  const submitPokemon = (e) => {
    e.preventDefault();
    const index = document.getElementById('index').value;
    if (index === '') {
      createPokemon();
    } else {
      updatePokemon(index);
    }
  };

  readPokemons();
  formPokemons.addEventListener('submit', submitPokemon);
};

document.addEventListener('DOMContentLoaded', documentReady);