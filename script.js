const foodCardArea = document.querySelector(".food-card-area");
const itemSearch = document.getElementById("item-search");
const searchBtn = document.getElementById("search-btn");




/* -----------------------------------------------------------------------
    --------------------- item caller by Name  funtion -----------------------
------------------------------------------------------------------------*/

const itemCallByName = () => {
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
    allItemShow(foods)
  }
};





/* -----------------------------------------------------------------------
    --------------------- item caller funtion -----------------------
------------------------------------------------------------------------*/



searchBtn.addEventListener("click", () => {
  itemCallByName();

});



const allItemShow = (data)=>{
    const allFood = data.meals;
    const allFindItem = document.createElement("div");
    foodCardArea.classList.add("food-card-area");



    /* for each loop for getting all card */
    for (let i = 0; i < allFood.length; i++) {
      const food = allFood[i];
      const foodCard = document.createElement("div");
      foodCard.id = food.idMeal;
      foodCard.className = "food-card";
      foodCard.setAttribute("onclick", "getSelectCard(this.id)");
 
      foodCard.innerHTML = `
        <div class="card" >
            <img src="${food.strMealThumb}" class="card-img-top item-thum" alt="...">
            <div class="card-body">
                <h5 class="text-center"> ${food.strMeal}</h5>
            </div>
        </div>
        `;
      allFindItem.appendChild(foodCard);
    }


    foodCardArea.innerHTML = allFindItem.innerHTML;
    foodCardArea.classList.add("food-card-area");
}



// ======================================================================

const getSelectCard = (id) => {
    console.log(id)
}


