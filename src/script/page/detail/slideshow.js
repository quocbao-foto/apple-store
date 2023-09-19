import { products } from '/src/script/data/data.js';
//tao slideshow
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
createSliderImage(products[2]);





var itemDoms = document.querySelectorAll(".image-list .item img");
console.log(itemDoms);
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
