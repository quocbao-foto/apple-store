import { setObjectToLocalStorage, getObjectFromLocalStorage, setArrayToLocalStorage, getArrayFromLocalStorage, removeObjectFromLocalStorage } from '/src/script/data/funtion-storage.js';

var count = getArrayFromLocalStorage('cart').length;
 
export function cartCount(count) {
    const cartIcon = document.querySelector('#header .h-cart');
    if (count === 0) {
        let cartCount = cartIcon.querySelector('.cart-count');
        if (!!cartCount) {
            cartIcon.removeChild(cartCount);
        }
    } else {

        cartIcon.innerHTML += `<div class="cart-count">${count}</div>`;
    }
}
cartCount (count);

