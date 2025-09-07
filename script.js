const loadCatagorys = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((json) => showCatagory(json));
};
loadCatagorys();

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
         alert(`You clicked on: ${cat.category_name}`);
    });

    categoriesDiv.appendChild(btn);
  });
};
