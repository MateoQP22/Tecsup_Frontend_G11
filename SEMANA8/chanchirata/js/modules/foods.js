// import {comidas} from "../utils/daja.js"
const foods = () => {
    const foodsFoods = document.getElementById('foodsFoods');
  
    const fetchApi = async () => {
    const response = await fetch('https://elliotgaramendi.github.io/frontend-tecsup-e-g11/semana-8/3-chanchirata/api/data.json');
    const data = await response.json();

    console.log(data);
    data.forEach((element)=>{
  
        const {id,name,description,urlImage,urlRecipe } = element
        foodsFoods.innerHTML += `
        <div class="col-md-4" key=${id}>
        <div class="card bg-dark border border-2 border-light border-opacity-25 mx-auto"
          style="width: min(100%, 18rem);">
          <div class="card-header">
            ${name}
          </div>
          <div class="card-body">
            <img src="${urlImage}" class="card-img-top" alt="Anime 1" width="256" height="144"
              style="width: 100%; height: 192px; object-fit: cover;">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
          </div>
          <div class="card-footer text-muted">
            <a href="${urlRecipe}" class="btn btn-primary">Receta</a>
          </div>
        </div>
      </div>
    `;
    });
};
    fetchApi();
};

export default foods;

