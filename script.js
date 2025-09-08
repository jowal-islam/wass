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

// show all Plants
const showAllPlants = (datas) => {
  const plants = datas.plants;
  const palntsContainer = document.getElementById("plants");
  palntsContainer.innerHTML = "";
  plants.forEach((plant) => {
    //  console.log(plant)
    const divContainer = document.createElement("div");
    divContainer.innerHTML = `
      
      <div class="card bg-base-100  shadow-sm hover:shadow-2xl transition-all duration-100">
          <figure class= "px-5 pt-3">
            <img
              src= "${plant.image}"
              class=" w-full h-48 object-cover rounded-sm mt-5 shadow-md"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-xl font-bold text-black">${plant.name}</h2>
            <p class = "text-gray-500">
              ${plant.description}
            </p>
            <div class=" flex justify-between">
                 <h1 class=" bg-[#DCFCE7] rounded-3xl p-3">Fruit Tree</h1>
                <h1 class=" font-bold text-lg"> 
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                  price :${plant.price}
                </h1>
            </div>
          
            <div class="card-actions justify-end">
              <button class="btn bg-[#15803D] w-full rounded-2xl text-white">Add to Cart</button>
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
  categories.forEach((cat, index) => {
    const categoriesDiv = document.getElementById("Categories");
    const btn = document.createElement("div");

    btn.innerText = cat.category_name;
    btn.style.display = "block";
    btn.style.margin = "5px";
    btn.style.padding = "10px";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";
    // btn.style.border = "2px solid green";
    // btn hover effect
    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "#15803D";
      btn.style.borderColor = "blue";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = "white";
      btn.style.borderColor = "green";
    });

    // add btn for categories control
    btn.addEventListener("click", (event) => {
      console.log("Clicked Category:", cat.category_name);
      console.log("Category Index:", index);
      // if category_name == "fruit tree" this code is run

      if (cat.category_name === "Fruit Tree") {
        const url = "https://openapi.programming-hero.com/api/plants";
        fetch(url)
          .then((res) => res.json())
          .then((json) => showFruitTree(json));
        const palntsContainer = document.getElementById("plants");
        palntsContainer.innerHTML = "";
      } else if (cat.category_name === "Flowering Tree") {
        const url = "https://openapi.programming-hero.com/api/plants";
        fetch(url)
          .then((res) => res.json())
          .then((json) => showFlowering(json));
        const palntsContainer = document.getElementById("plants");
        palntsContainer.innerHTML = "";
      } else if (cat.category_name === "Shade Tree") {
        const url = "https://openapi.programming-hero.com/api/plants";
        fetch(url)
          .then((res) => res.json())
          .then((json) => showShadeTree(json));
        const palntsContainer = document.getElementById("plants");
        palntsContainer.innerHTML = "";
      } else if (cat.category_name === "Medicinal Tree") {
        const url = "https://openapi.programming-hero.com/api/plants";
        fetch(url)
          .then((res) => res.json())
          .then((json) => showMedicinal(json));
        const palntsContainer = document.getElementById("plants");
        palntsContainer.innerHTML = "";
      } else if (cat.category_name === "Timber Tree") {
        const url = "https://openapi.programming-hero.com/api/plants";
        fetch(url)
          .then((res) => res.json())
          .then((json) => showTimber(json));
        const palntsContainer = document.getElementById("plants");
        palntsContainer.innerHTML = "";
      } else if (cat.category_name === "Evergreen Tree") {
        const url = "https://openapi.programming-hero.com/api/plants";
        fetch(url)
          .then((res) => res.json())
          .then((json) => showEvergreen(json));
        const palntsContainer = document.getElementById("plants");
        palntsContainer.innerHTML = "";
      } else if (cat.category_name === "Ornamental Plant") {
        const url = "https://openapi.programming-hero.com/api/plants";
        fetch(url)
          .then((res) => res.json())
          .then((json) => showOrnamental(json));
        const palntsContainer = document.getElementById("plants");
        palntsContainer.innerHTML = "";
      } else if (cat.category_name === "Bamboo") {
        const url = "https://openapi.programming-hero.com/api/plants";
        fetch(url)
          .then((res) => res.json())
          .then((json) => showBamboo(json));
        const palntsContainer = document.getElementById("plants");
        palntsContainer.innerHTML = "";
      } else if (cat.category_name === "Climber") {
        const url = "https://openapi.programming-hero.com/api/plants";
        fetch(url)
          .then((res) => res.json())
          .then((json) => showClimber(json));
        const palntsContainer = document.getElementById("plants");
        palntsContainer.innerHTML = "";
      } else if (cat.category_name === "Aquatic Plant") {
        const url = "https://openapi.programming-hero.com/api/plants";
        fetch(url)
          .then((res) => res.json())
          .then((json) => showAquatic(json));
        const palntsContainer = document.getElementById("plants");
        palntsContainer.innerHTML = "";
      }
    });

    categoriesDiv.appendChild(btn);
  });
};

// show fruit tree
const showFruitTree = (datas) => {
  const palntsContainer = document.getElementById("plants");
  const plants = datas.plants;
  plants.forEach((plant) => {
    if (plant.category === "Fruit Tree") {
      console.log(plant);
      const divContainer = document.createElement("div");
      divContainer.innerHTML = `
      
      <div class="card bg-base-100  shadow-sm hover:shadow-2xl transition-all duration-100">
          <figure class= "px-5 pt-3">
            <img
              src= "${plant.image}"
              class=" w-full h-48 object-cover rounded-sm mt-5 shadow-md"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-xl font-bold text-black">${plant.name}</h2>
            <p class = "text-gray-500">
              ${plant.description}
            </p>
            <div class=" flex justify-between">
                 <h1 class=" bg-[#DCFCE7] rounded-3xl p-3">Fruit Tree</h1>
                <h1 class=" font-bold text-lg"> 
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                  price :${plant.price}
                </h1>
            </div>
          
            <div class="card-actions justify-end">
              <button class="btn bg-[#15803D] w-full rounded-2xl text-white">Add to Cart</button>
            </div>
          </div>
        </div> 
      
   `;
      palntsContainer.appendChild(divContainer);
    }
  });
};

// Flowering Tree ui

const showFlowering = (datas) => {
  const palntsContainer = document.getElementById("plants");
  const plants = datas.plants;
  plants.forEach((plant) => {
    if (plant.category === "Flowering Tree") {
      console.log(plant);
      const divContainer = document.createElement("div");
      divContainer.innerHTML = `
      
      <div class="card bg-base-100  shadow-sm hover:shadow-2xl transition-all duration-100">
          <figure class= "px-5 pt-3">
            <img
              src= "${plant.image}"
              class=" w-full h-48 object-cover rounded-sm mt-5 shadow-md"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-xl font-bold text-black">${plant.name}</h2>
            <p class = "text-gray-500">
              ${plant.description}
            </p>
            <div class=" flex justify-between">
                 <h1 class=" bg-[#DCFCE7] rounded-3xl p-3">Fruit Tree</h1>
                <h1 class=" font-bold text-lg"> 
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                  price :${plant.price}
                </h1>
            </div>
          
            <div class="card-actions justify-end">
              <button class="btn bg-[#15803D] w-full rounded-2xl text-white">Add to Cart</button>
            </div>
          </div>
        </div> 
      
   `;
      palntsContainer.appendChild(divContainer);
    }
  });
};

// shade tree ui

const showShadeTree = (datas) => {
  const palntsContainer = document.getElementById("plants");
  const plants = datas.plants;
  plants.forEach((plant) => {
    if (plant.category === "Shade Tree") {
      console.log(plant);
      const divContainer = document.createElement("div");
      divContainer.innerHTML = `
      
     <div class="card bg-base-100  shadow-sm hover:shadow-2xl transition-all duration-100">
          <figure class= "px-5 pt-3">
            <img
              src= "${plant.image}"
              class=" w-full h-48 object-cover rounded-sm mt-5 shadow-md"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-xl font-bold text-black">${plant.name}</h2>
            <p class = "text-gray-500">
              ${plant.description}
            </p>
            <div class=" flex justify-between">
                 <h1 class=" bg-[#DCFCE7] rounded-3xl p-3">Fruit Tree</h1>
                <h1 class=" font-bold text-lg"> 
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                  price :${plant.price}
                </h1>
            </div>
          
            <div class="card-actions justify-end">
              <button class="btn bg-[#15803D] w-full rounded-2xl text-white">Add to Cart</button>
            </div>
          </div>
        </div> 
      
   `;
      palntsContainer.appendChild(divContainer);
    }
  });
};

// medicinal tree ui
const showMedicinal = (datas) => {
  const palntsContainer = document.getElementById("plants");
  const plants = datas.plants;
  plants.forEach((plant) => {
    if (plant.category === "Medicinal Tree") {
      console.log(plant);
      const divContainer = document.createElement("div");
      divContainer.innerHTML = `
      
      <div class="card bg-base-100  shadow-sm hover:shadow-2xl transition-all duration-100">
          <figure class= "px-5 pt-3">
            <img
              src= "${plant.image}"
              class=" w-full h-48 object-cover rounded-sm mt-5 shadow-md"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-xl font-bold text-black">${plant.name}</h2>
            <p class = "text-gray-500">
              ${plant.description}
            </p>
            <div class=" flex justify-between">
                 <h1 class=" bg-[#DCFCE7] rounded-3xl p-3">Fruit Tree</h1>
                <h1 class=" font-bold text-lg"> 
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                  price :${plant.price}
                </h1>
            </div>
          
            <div class="card-actions justify-end">
              <button class="btn bg-[#15803D] w-full rounded-2xl text-white">Add to Cart</button>
            </div>
          </div>
        </div> 
      
   `;
      palntsContainer.appendChild(divContainer);
    }
  });
};
//  showTimber Tree
const showTimber = (datas) => {
  const palntsContainer = document.getElementById("plants");
  const plants = datas.plants;
  plants.forEach((plant) => {
    if (plant.category === "Timber Tree") {
      console.log(plant);
      const divContainer = document.createElement("div");
      divContainer.innerHTML = `
      
      <div class="card bg-base-100  shadow-sm hover:shadow-2xl transition-all duration-100">
          <figure class= "px-5 pt-3">
            <img
              src= "${plant.image}"
              class=" w-full h-48 object-cover rounded-sm mt-5 shadow-md"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-xl font-bold text-black">${plant.name}</h2>
            <p class = "text-gray-500">
              ${plant.description}
            </p>
            <div class=" flex justify-between">
                 <h1 class=" bg-[#DCFCE7] rounded-3xl p-3">Fruit Tree</h1>
                <h1 class=" font-bold text-lg"> 
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                  price :${plant.price}
                </h1>
            </div>
          
            <div class="card-actions justify-end">
              <button class="btn bg-[#15803D] w-full rounded-2xl text-white">Add to Cart</button>
            </div>
          </div>
        </div> 
      
   `;
      palntsContainer.appendChild(divContainer);
    }
  });
};

//  showOrnamental Tree
const showOrnamental = (datas) => {
  const palntsContainer = document.getElementById("plants");
  const plants = datas.plants;
  plants.forEach((plant) => {
    if (plant.category === "Ornamental Plant") {
      console.log(plant);
      const divContainer = document.createElement("div");
      divContainer.innerHTML = `
      
      <div class="card bg-base-100  shadow-sm hover:shadow-2xl transition-all duration-100">
          <figure class= "px-5 pt-3">
            <img
              src= "${plant.image}"
              class=" w-full h-48 object-cover rounded-sm mt-5 shadow-md"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-xl font-bold text-black">${plant.name}</h2>
            <p class = "text-gray-500">
              ${plant.description}
            </p>
            <div class=" flex justify-between">
                 <h1 class=" bg-[#DCFCE7] rounded-3xl p-3">Fruit Tree</h1>
                <h1 class=" font-bold text-lg"> 
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                  price :${plant.price}
                </h1>
            </div>
          
            <div class="card-actions justify-end">
              <button class="btn bg-[#15803D] w-full rounded-2xl text-white">Add to Cart</button>
            </div>
          </div>
        </div> 
      
   `;
      palntsContainer.appendChild(divContainer);
    }
  });
};
// showEvergreen
const showEvergreen = (datas) => {
  const palntsContainer = document.getElementById("plants");
  const plants = datas.plants;
  plants.forEach((plant) => {
    if (plant.category === "Evergreen Tree") {
      console.log(plant);
      const divContainer = document.createElement("div");
      divContainer.innerHTML = `
      
      <div class="card bg-base-100  shadow-sm hover:shadow-2xl transition-all duration-100">
          <figure class= "px-5 pt-3">
            <img
              src= "${plant.image}"
              class=" w-full h-48 object-cover rounded-sm mt-5 shadow-md"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-xl font-bold text-black">${plant.name}</h2>
            <p class = "text-gray-500">
              ${plant.description}
            </p>
            <div class=" flex justify-between">
                 <h1 class=" bg-[#DCFCE7] rounded-3xl p-3">Fruit Tree</h1>
                <h1 class=" font-bold text-lg"> 
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                  price :${plant.price}
                </h1>
            </div>
          
            <div class="card-actions justify-end">
              <button class="btn bg-[#15803D] w-full rounded-2xl text-white">Add to Cart</button>
            </div>
          </div>
        </div> 
      
   `;
      palntsContainer.appendChild(divContainer);
    }
  });
};
// showBamboo
const showBamboo = (datas) => {
  const palntsContainer = document.getElementById("plants");
  const plants = datas.plants;
  plants.forEach((plant) => {
    if (plant.category === "Bamboo") {
      console.log(plant);
      const divContainer = document.createElement("div");
      divContainer.innerHTML = `
      
      <div class="card bg-base-100  shadow-sm hover:shadow-2xl transition-all duration-100">
          <figure class= "px-5 pt-3">
            <img
              src= "${plant.image}"
              class=" w-full h-48 object-cover rounded-sm mt-5 shadow-md"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-xl font-bold text-black">${plant.name}</h2>
            <p class = "text-gray-500">
              ${plant.description}
            </p>
            <div class=" flex justify-between">
                 <h1 class=" bg-[#DCFCE7] rounded-3xl p-3">Fruit Tree</h1>
                <h1 class=" font-bold text-lg"> 
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                  price :${plant.price}
                </h1>
            </div>
          
            <div class="card-actions justify-end">
              <button class="btn bg-[#15803D] w-full rounded-2xl text-white">Add to Cart</button>
            </div>
          </div>
        </div> 
      
   `;
      palntsContainer.appendChild(divContainer);
    }
  });
};
// showClimber
const showClimber = (datas) => {
  const palntsContainer = document.getElementById("plants");
  const plants = datas.plants;
  plants.forEach((plant) => {
    if (plant.category === "Climber") {
      console.log(plant);
      const divContainer = document.createElement("div");
      divContainer.innerHTML = `
      
      <div class="card bg-base-100  shadow-sm hover:shadow-2xl transition-all duration-100">
          <figure class= "px-5 pt-3">
            <img
              src= "${plant.image}"
              class=" w-full h-48 object-cover rounded-sm mt-5 shadow-md"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-xl font-bold text-black">${plant.name}</h2>
            <p class = "text-gray-500">
              ${plant.description}
            </p>
            <div class=" flex justify-between">
                 <h1 class=" bg-[#DCFCE7] rounded-3xl p-3">Fruit Tree</h1>
                <h1 class=" font-bold text-lg"> 
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                  price :${plant.price}
                </h1>
            </div>
          
            <div class="card-actions justify-end">
              <button class="btn bg-[#15803D] w-full rounded-2xl text-white">Add to Cart</button>
            </div>
          </div>
        </div> 
      
   `;
      palntsContainer.appendChild(divContainer);
    }
  });
};

const showAquatic = (datas) => {
  const palntsContainer = document.getElementById("plants");
  const plants = datas.plants;
  plants.forEach((plant) => {
    if (plant.category === "Aquatic Plant") {
      console.log(plant);
      const divContainer = document.createElement("div");
      divContainer.innerHTML = `
      
      <div class="card bg-base-100  shadow-sm hover:shadow-2xl transition-all duration-100">
          <figure class= "px-5 pt-3">
            <img
              src= "${plant.image}"
              class=" w-full h-48 object-cover rounded-sm mt-5 shadow-md"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-xl font-bold text-black">${plant.name}</h2>
            <p class = "text-gray-500">
              ${plant.description}
            </p>
            <div class=" flex justify-between">
                 <h1 class=" bg-[#DCFCE7] rounded-3xl p-3">Fruit Tree</h1>
                <h1 class=" font-bold text-lg"> 
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i>
                  price :${plant.price}
                </h1>
            </div>
          
            <div class="card-actions justify-end">
              <button class="btn bg-[#15803D] w-full rounded-2xl text-white">Add to Cart</button>
            </div>
          </div>
        </div> 
      
   `;
      palntsContainer.appendChild(divContainer);
    }
  });
};

// catch the button
const addButton = palntsContainer.querySelector("button"); // এই card এর button টা ধরবে
addButton.addEventListener("click", () => {
  // console.log(`${plant.name} add to cart!`);
  alert('hi this btn')
  console.log('btn')
});