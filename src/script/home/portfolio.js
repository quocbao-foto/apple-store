import { productTypes } from "/src/script/data/data.js";

var productPortfolioDom = document.getElementsByClassName("product-portfolio");
console.log(productTypes);
//funciton tao product type item
function createTypeItem(productType) {
    let name = productType.name;
    let type = productType.type;
    let image = productType.image;

    let box = `<div class="portfolio-box">
    <div class="portfolio-item">
    <a href="/index.html?id=${type}">
    <img class="image-type" src=${image} alt="">   
    </a>
    <a href="">
    <div class="name-type">${name}</div>
    </a>
    </div>
  </div>`;
  
  return box;
};

//function tao list type
function createListType(productTypes) {
    for (var e of productTypes) { 
        productPortfolioDom[0].innerHTML += createTypeItem(e);
    };
};

createListType(productTypes);

