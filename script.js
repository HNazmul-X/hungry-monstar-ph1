const foodCardArea  = document.querySelector(".food-card-area")
const itemSearch = document.getElementById("item-search");
const searchBtn = document.getElementById('search-btn');
;

const itemCall = item => {

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${itemSearch.value}`;
    fetch(url)
      .then((res) => res.json())
      .then((food) => {
        foodShow(food);
      })
}

const foodShow = foods =>{
    const foodCard = document.createElement("div");
   if( itemSearch.value === "" && foods.meals == null ){
       foodCardArea.innerHTML = `
       <div class="alert alert-danger" role="alert">
         <h3> Sorry we can't get any item "${itemSearch.value}"</h3>
        </div>
       `;
   } else{
       const food = foods.meals[0];

       foodCard.innerHTML = `
    <div class="card" >
    <img src="${food.strMealThumb}" class="card-img-top item-thum" alt="...">
    <div class="card-body">
        <h2 class="text-center"> ${food.strMeal}</h2>
    </div>
    </div>
    `;
       console.log(food);
       foodCardArea.innerHTML = foodCard.innerHTML;
   }
    
}
searchBtn.addEventListener('click',()=>{
    itemCall()
    
})
