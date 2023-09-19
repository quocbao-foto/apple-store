import { products } from "/src/script/data/data.js"
import { getArrayFromLocalStorage, setArrayToLocalStorage } from "/src/script/data/funtion-storage.js";
import { limitWords,formatMoney } from "/src/script/data/function-format.js";

// tao product-group 
const productContainer = document.getElementById('product-container');

export function createProductGroup(nameType, className) {
  let element = document.createElement('div');
  element.classList.add('product-group');
  element.classList.add(className);
  element.innerHTML = `
    <div class="pro-type"> ${nameType}</div>
    <div class="pro-wrap"></div>
    `;
  productContainer.appendChild(element);
}

// tao san pham 
// truyen vao mang san pham, va class

export function createProductList(products, className) {
  let productWrapper = document.querySelector(`.${className}`).querySelector('.pro-wrap');

  products.forEach((item) => {

    let name = item.name;
    name = limitWords(name, 35);

    let price = formatMoney(item.price);
    let priceSale = formatMoney(item.priceSale());


    let newElm = document.createElement('a');
    // newElm.href = `/page/detail.html?/param=${item.id} `
    newElm.setAttribute('href', `/page/detail.html?id=${item.id}`);

    newElm.classList.add('pro-div');
    newElm.innerHTML = `
        <div class="product-item" id = "${item.id}" >
        <img src="${item.image}"
            alt="" class="item-image">
        <div class="item-name">${name}</div>
        <div class="item-price-sale">${priceSale}</div>
        <div class="item-price">${price}</div>
        <button class="item-buy">Buy</button>
    </div>
        `;
    // click vao button
    newElm.querySelector('.item-buy').addEventListener('click', addToCart)

    //click vao box san pham
    newElm.onclick = function () {

    }
    productWrapper.appendChild(newElm);
  })
}

function addToCart(event) {

  const targetElement = event.target.parentNode;

  // add id san pham vao local
  //  > lay id tu click
  let thisID = targetElement.id;
  console.log(thisID);
  //  > gan id vao mang
  //  > cap nhat mang len str    

  // cap nhat display cart
}








