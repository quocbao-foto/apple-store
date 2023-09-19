import { products } from '/src/script/data/data.js';
import { formatMoney, limitWords } from '/src/script/data/function-format.js';
import { setArrayToLocalStorage,getArrayFromLocalStorage,setObjectToLocalStorage,getObjectFromLocalStorage} from'/src/script/data/funtion-storage.js';

function getURLParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

let id = getURLParam('id')

const currentProduct = Object.assign({}, lookupProductById(id));
console.log(currentProduct);

//ham lay san pham tu prducts
function lookupProductById(productId) {
    const product = products.find(item => item.id === productId);
    return product;
}


// chen ten sapham
document.querySelector('.main-name h1').innerHTML = currentProduct.name;

// chen gia
document.querySelector('.detail-price .price-sale').innerHTML = formatMoney(currentProduct.priceSale());
document.querySelector('.detail-price .price-root').innerHTML = formatMoney(currentProduct.price);

//chen list images
function createSliderImage(currentProduct) {
    const listImages = document.querySelector('.detail-gallery .image-list');
    listImages.innerHTML = '';
    currentProduct.imageDetails.forEach((link) => {
        let nodeNew = document.createElement('div');
        nodeNew.className = 'item';
        let imageNew = document.createElement('img');
        imageNew.src = `${link}`;
        nodeNew.appendChild(imageNew);
        listImages.appendChild(nodeNew);
    });
}
createSliderImage(currentProduct);

// xu li slideshow
var itemDoms = document.querySelectorAll(".image-list .item img");
var currentIndex = 0;
var time = 5000;


var mainDom = document.querySelector(".picture img");
var nextDom = document.querySelector(".picture>button.left");
nextDom.addEventListener("click", prev);
var prevDom = document.querySelector(".picture>button.right");
prevDom.addEventListener("click", next);
// update picture
function updateMain(index) {
    mainDom.src = itemDoms[index].src;
}
function updateActive(index) {
    itemDoms.forEach((item) => {
        item.parentNode.classList.remove("active");
    });
    itemDoms[index].parentNode.classList.add("active");
}
function updateScreen(index) {
    updateActive(index);
    updateMain(index);
}
function next() {
    currentIndex++;
    if (currentIndex == itemDoms.length) {
        currentIndex = 0;
    };
    updateScreen(currentIndex);
}
function prev() {
    currentIndex--;
    if (currentIndex == -1) {
        currentIndex = itemDoms.length - 1;
    };
    updateScreen(currentIndex);
}


// gan chuc nang cho item
itemDoms.forEach((item, index) => {
    item.addEventListener('click', () => {
        time += 5000;
        currentIndex = index;
        updateMain(currentIndex);
        updateActive(currentIndex);
        console.log(currentIndex);
    })
});
setInterval(() => {
    time = 5000;
    currentIndex++;
    if (currentIndex == itemDoms.length) {
        currentIndex = 0;
    }
    updateScreen(currentIndex);
}, time)

// option
function updateOption() {
    let optionList = document.querySelector('.detail-info .option-list');
    optionList.innerHTML = '';
    currentProduct.options.forEach((option) => {
        let nodeNew = document.createElement('div');
        nodeNew.className = 'option-tiem';
        nodeNew.innerHTML = option;
        optionList.appendChild(nodeNew);
    });
}
updateOption();

let options = document.querySelectorAll('.detail-info .option-list .option-tiem');
options.forEach((option) => {
    option.addEventListener('click', (event) => {
        options.forEach((option) => {
            option.classList.remove('active-option');
        })
        event.target.classList.add('active-option');
        currentProduct['option'] = option.innerHTML;
        console.log(option.innerHTML);
        console.log(!!currentProduct.option);
    })
})




function updateCorlor() {
    let colorBox = document.querySelector('.detail-info .color-list');
    colorBox.innerHTML = '';
    currentProduct.colors.forEach((color)=> {
        let nodeNew =document.createElement('div');
        nodeNew.className = 'color-choice';
        nodeNew.innerHTML = `<div class="color"></div>`;
        nodeNew.querySelector('.color').style.backgroundColor = color;
        colorBox.appendChild(nodeNew);
    });
}

updateCorlor();

const colors = document.querySelectorAll('.detail-info .color-list .color-choice')
 colors.forEach((color) => {
    color.addEventListener('click',(event) => {
        colors.forEach((color) => {
            color.classList.remove('color-active');
        })
        event.target.parentNode.classList.add('color-active');
        currentProduct.color = color.querySelector('.color').style.backgroundColor;
    })
 })

 //alert
 function alertFn() {
    var flash = false;
    if (!currentProduct.option) {
        alert('Please select option!');
        flash = true;
    }
    if (!currentProduct.color) {
        alert('Please select color!');
        flash = true;
    }
    return flash;
}
 // mua hang
 let buyButton = document.querySelector('.detail-info .detail-buy')
//  console.log(buyButton);

 buyButton.addEventListener('click', ()=> {
    if (alertFn()) {
        return;
    }
    currentProduct.quantity = 1;
    currentProduct.checked = true;
    currentProduct.price = currentProduct.priceSale();
    setObjectToLocalStorage('productFromPageDetails',currentProduct);
    // thoa dieu kien thi sang cart
    window.location.href='/page/cart.html';
 })

 