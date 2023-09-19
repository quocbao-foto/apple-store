import { products } from '/src/script/data/data.js';
import { setObjectToLocalStorage, getObjectFromLocalStorage, setArrayToLocalStorage, getArrayFromLocalStorage, removeObjectFromLocalStorage } from '/src/script/data/funtion-storage.js';
import { cartRender, itemRender, totalRender } from '/src/script/page/cart/cart-render-display.js'
import { cartCount } from '/src/script/home/cart-count.js'


// truyen vao object da co qulity , checked = true;
const cart = getArrayFromLocalStorage('cart');
const productFromDetail = getObjectFromLocalStorage('productFromPageDetails');




// viet ham addtocart (product) { - san pham co ton tai hay chua ? tang so luong : them san pham }


function findProductInCart(productToFind) {
    const productIndex = cart.findIndex(item => (item.id === productToFind.id && item.color === productToFind.color && item.option === productToFind.option));

    if (productIndex !== -1) {
        return productIndex; // Trả về vị trí của sản phẩm trong giỏ hàng
    } else {
        return false; // Sản phẩm không tồn tại trong giỏ hàng
    }
}

function addToCart(product) {
    let indexFind = findProductInCart(product)
    if (indexFind === false) {
        //khong tim thay sp
        //neu sp la null return
        if (productFromDetail === null) { console.log('san pham null'); return }
        console.log(product);
        cart.push(product)
        console.log(' gio hang da cap nhat', cart)
        setArrayToLocalStorage('cart', cart);
        removeObjectFromLocalStorage('productFromPageDetails');

    } else {
        //tim thay sp
        console.log('tang so luong')
        console.log(cart[indexFind])
        cart[indexFind].quantity++;
        console.log('so luong da tăng', cart[indexFind].quantity);
        setArrayToLocalStorage('cart', cart);
    }
}

// tinh tong tien
var total = 0;
function totalCart(cart) {
    return cart.reduce((sum, value) => {
        if (value.checked) {
            return sum += value.price * value.quantity;
        }
        else {
            return sum;
        }
    }, 0);

}

function updateTotal() {
    total = totalCart(cart);
    totalRender(total);

}


//main
if (!(productFromDetail === null)) {
    addToCart(productFromDetail);
}

updateDisplay();
checkOut();

//update cart 
function updateCart() {
    cartRender(cart);
    setArrayToLocalStorage('cart', cart)
    if (cart.length === 0) return;
    delectBtn();
    checkbox();
    inputNumbers();
}

//update display
function updateDisplay() {
    updateCart();
    updateTotal();
    cartCount(cart.length);
}


//xoa san pham
function delectBtn() {
    var delectBtn = document.querySelectorAll('.cart-item .delect i');
    delectBtn.forEach((item) => {
        item.addEventListener('click', (event) => {
            let index = event.target.parentNode.parentNode.parentNode.id;
            removeProductByIndex(cart, index);
            console.log(event.target.parentNode.parentNode.parentNode);
            updateDisplay()

        })
    })

}
// ham xoa san pham 
function removeProductByIndex(cart, index) {
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
    }
}

// checkbox
function checkbox() {
    var checkbox = document.querySelectorAll('.cart-item .checkbox input');
    checkbox.forEach((item) => {
        item.addEventListener('click', (event) => {
            let index = event.target.parentNode.parentNode.parentNode.id;
            let check = event.target.checked;
            cart[index].checked = check;
            updateDisplay()
        })
    })
}

//input number 
function inputNumbers() {
    const inputNumbers = document.querySelectorAll('.cart-item .quantity input');
    inputNumbers.forEach((value) => {
        inputNumber(value);
    })
}
function inputNumber(inputNumber) {

    let plus = inputNumber.parentNode.querySelector('.cart-item .quantity .plus');
    let minus = inputNumber.parentNode.querySelector('.cart-item .quantity .minus');

    plus.onclick = function () {
        console.log(plus)
        inputNumber.value++;
    }

    minus.onclick = function () {
        inputNumber.stepDown();
    }

    inputNumber.parentNode.addEventListener('click', (event) => {

        console.log(event.target);

        let index = event.target.parentNode.parentNode.parentNode.id;
        let value = event.target.parentNode.querySelector('input').value;
        cart[index].quantity = value;
        updateDisplay();
    })
}

// thanh toan

function checkOut() {
    const checkOut = document.querySelector('#cart-checkout');
    checkOut.addEventListener('click', () => {
        if (total === 0) {
            alert('Vui lòng chọn sản phẩm!')
        }
        else {
            alert('Mua hàng thành công!')
            cart.splice(0, cart.length);
            updateDisplay();
            window.location.href = '/index.html'

        }
    })
}














