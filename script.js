const foodCardArea = document.querySelector(".food-card-area");
const itemSearch = document.getElementById("item-search");
const searchBtn = document.getElementById("search-btn");




/* -----------------------------------------------------------------------
    --------------------- item caller funtion -----------------------
------------------------------------------------------------------------*/

const itemCall = () => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${itemSearch.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((food) => {
        console.log(food);
      foodShow(food);
    });
};




/* -----------------------------------------------------------------------
    --------------------- item shower and validator funtion -----------------------
------------------------------------------------------------------------*/

const foodShow = (foods) => {

  if (itemSearch.value.length <= 0 || foods.meals == null) {
    foodCardArea.innerHTML = `
       <div class="alert alert-danger" role="alert">
         <h3> Sorry we can't get any item "${itemSearch.value}"</h3>
        </div>
       `;
    foodCardArea.classList.remove("food-card-area");
    foodCardArea.classList.add("food-card-area-warning");
  }
   else {
    const allFood = foods.meals
    const allFindItem = document.createElement("div")
   for(let i = 0; i < allFood.length; i ++){
       const food = allFood[i]
        const foodCard = document.createElement("div");
       foodCardArea.classList.add("food-card-area");
       foodCard.innerHTML = `
        <div class="card" >
            <img src="${food.strMealThumb}" class="card-img-top item-thum" alt="...">
            <div class="card-body">
                <h2 class="text-center"> ${food.strMeal}</h2>
            </div>
        </div>
        `;
        allFindItem.appendChild(foodCard);
    }
    foodCardArea.innerHTML = allFindItem.innerHTML
    foodCardArea.classList.add("food-card-area");
  }
};





/* -----------------------------------------------------------------------
    --------------------- item caller funtion -----------------------
------------------------------------------------------------------------*/



searchBtn.addEventListener("click", () => {
  itemCall();
});










// const food = foods.meals[0];
// foodCardArea.classList.add("food-card-area");
// foodCard.innerHTML = `
//     <div class="card" >
//     <img src="${food.strMealThumb}" class="card-img-top item-thum" alt="...">
//     <div class="card-body">
//         <h2 class="text-center"> ${food.strMeal}</h2>
//     </div>
//     </div>
//     `;
// console.log(food);
// foodCardArea.innerHTML = foodCard.innerHTML;