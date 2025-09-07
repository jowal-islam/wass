
const loadCatagorys = ()=> {
    const url = "https://openapi.programming-hero.com/api/categories"
    fetch(url)
    .then(res => res.json())
    .then(json => showCatagory(json))
}
loadCatagorys()

const showCatagory = (datas)=> {
  const categories = datas.categories;
  categories.forEach(cat => {
   
    const categoriesDiv = document.getElementById('Categories')
    const catChild = document.createElement('h1')
    catChild.innerText = cat.category_name
     


    categoriesDiv.appendChild(catChild)
  })
}