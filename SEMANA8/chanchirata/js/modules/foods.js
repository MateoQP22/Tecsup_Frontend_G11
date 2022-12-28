const foods = () => {
  const renderFoods = (data) => {
    const foodsFoods = document.getElementById('foodsFoods');

    data.forEach((element) => {
      // const { id, name, description, urlImage, urlRecipe } = element;
      const { id, title, price, description, category, image, rating } = element;

      foodsFoods.innerHTML += `
        <div class="col-md-4" key=${id}>
          <div class="card bg-dark border border-2 border-light border-opacity-25 h-100 mx-auto"
            style="width: min(100%, 18rem);">
            <div class="card-header text-center">
              ${title}
            </div>
            <div class="card-body">
              <img src="${image}" class="card-img-top" alt="Anime 1" width="256" height="144"
                style="width: 100%; height: 192px; object-fit: cover; border-radius: 0.5rem">
              <h5 class="card-title mt-2">${category}</h5>
              <p class="card-text">${description}</p>
              <p class="card-text">${price}</p>
            </div>
            <div class="card-footer text-center">
              <a href="${rating}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Receta</a>
            </div>
          </div>
        </div>
      `;
    });
  };

  const fetchRead = async () => {
    // const response = await fetch('https://elliotgaramendi.github.io/frontend-tecsup-e-g11/semana-8/3-chanchirata/api/data.json');
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data);
    renderFoods(data);
  };
  fetchRead();
};

export default foods;

