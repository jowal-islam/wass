// all categories
const loadCatagorys = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((json) => showCatagory(json));
};
loadCatagorys();

// all plants
const loadAllPlants = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((json) => showAllPlants(json));
};
loadAllPlants();
// load catagory plants
// const loadCatagorysplants = () => {
//   const url = "https://openapi.programming-hero.com/api/category/1"
//   fetch(url)
//   .then(res => res.json())
//    .then(json => showCatagoryPlants(json) )
// }
// loadCatagorysplants()

//  show Catagorys ui
// const showCatagoryPlants = (datas)=>{
//   const plants = datas.plants
//   plants.forEach(data =>{
//     console.log(data)
//   } )
// }

// show all Plants
const showAllPlants = (datas) => {
  const plants = datas.plants;
  const palntsContainer = document.getElementById("plants");
  palntsContainer.innerHTML = "";
  plants.forEach((plant) => {
    //  console.log(plant)
    const divContainer = document.createElement("div");
    divContainer.innerHTML = `
      
      <div class="card bg-base-100  shadow-sm">
          <figure>
            <img
              src= "${plant.image}"
              class="w-60 h-60 object-cover rounded-sm mt-5 "
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${plant.name}</h2>
            <p>
              ${plant.description}
            </p>
            <h1> price :${plant.price}</h1>
          
            <div class="card-actions justify-end">
              <button class="btn btn-primary w-full">Buy Now</button>
            </div>
          </div>
        </div> 
      
   `;
    palntsContainer.appendChild(divContainer);
  });
};

// show category_name
const showCatagory = (datas) => {
  const categories = datas.categories;
  categories.forEach((cat) => {
    const categoriesDiv = document.getElementById("Categories");
    const btn = document.createElement("button");

    btn.innerText = cat.category_name;
    btn.style.display = "block";
    btn.style.margin = "5px";
    btn.style.padding = "10px";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";

    btn.addEventListener("click", () => {
      const url = "https://openapi.programming-hero.com/api/plants";

      fetch(url)
        .then((res) => res.json())
        // .then(json => console.log(json))
        .then((json) => showAllnewPlants(json))

        .catch((err) => console.error("Error:", err));
      const palntsContainer = document.getElementById("plants");
      palntsContainer.innerHTML = "";
    });

    categoriesDiv.appendChild(btn);
  });
};

const showAllnewPlants = (datas) => {
  const palntsContainer = document.getElementById("plants");
  const plants = datas.plants;
  plants.forEach((plant) => {
    if (plant.category === "Fruit Tree") {
      console.log(plant);
      const divContainer = document.createElement("div");
      divContainer.innerHTML = `
      
      <div class="card bg-base-100  shadow-sm">
          <figure>
            <img
              src= "${plant.image}"
              class="w-60 h-60 object-cover rounded-sm mt-5 "
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${plant.name}</h2>
            <p>
              ${plant.description}
            </p>
            <h1> price :${plant.price}</h1>
          
            <div class="card-actions justify-end">
              <button class="btn btn-primary w-full">Buy Now</button>
            </div>
          </div>
        </div> 
      
   `;
      palntsContainer.appendChild(divContainer);
    }
  });
};
