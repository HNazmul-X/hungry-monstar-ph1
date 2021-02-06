const foodShow = (foods) => {
  if (itemSearch.value.length <= 0 || foods.meals == null) {
    foodCardArea.innerHTML = `
       <div class="alert alert-danger" role="alert">
         <h3> Sorry we can't get any item "${itemSearch.value}"</h3>
        </div>
       `;
    foodCardArea.classList.remove("food-card-area");
    foodCardArea.classList.add("food-card-area-warning");
  } else {
    const allFood = foods.meals;
    const allFindItem = document.createElement("div");
    for (let i = 0; i < allFood.length; i++) {
      const food = allFood[i];
      const foodCard = document.createElement("div");
      foodCardArea.classList.add("food-card-area");
      foodCard.innerHTML = `
        <div class="card" >
            <img src="${food.strMealThumb}" class="card-img-top item-thum" alt="...">
            <div class="card-body">
                <h3 class="text-center"> ${food.strMeal}</h3>
            </div>
        </div>
        `;
      allFindItem.appendChild(foodCard);
    }
    foodCardArea.innerHTML = allFindItem.innerHTML;
    foodCardArea.classList.add("food-card-area");
  }
};