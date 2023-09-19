import { products } from '/src/script/data/data.js';

var cart = [];
var emxamole = products[0];
emxamole.quality = 1;
emxamole.checked = true;
// cart.push(emxamole);
// cart.push(emxamole);
// cart.push(emxamole);

var summaryDom = document.getElementById("summary");
var sumCart = 0;

// viet ham tao san pham
// addToCart(0);
// addToCart(0);
// addToCart(0);
// function addToCart(productID) {
//     var indexCart;
//     const itemInProducts = products.find(product => product.id === productID);
//     console.log(itemInProducts);
//     var productFind = cart.find((item, index) => {
//         indexCart = index;
//         return item.id === productID
//     });
//     // tra ve prod hoac udf
//     // neu co thi tang so luong neu khong co thi add
//     if (productFind) {
//         cart[indexCart].quality++;
//         let upDateQuantityDom = document.getElementById(`item-id-${productID}`);
//         upDateQuantityDom.value = cart[indexCart].quality;

//         updateSummary(cart);

//     } else {
//         productFind = itemInProducts;
//         productFind["quality"] = 1;
//         productFind["checked"] = true;

//         let checkBoxDom = document.getElementById(`item-checkbox-${productFind.id}`);


//         cart.push(productFind);

//         displayCart(cart);

//         updateSummary(cart);
//     }

// }


const cartDom = document.getElementsByClassName("cart-container")[0];

function displayCart(cart) {
    console.log(cart)
    console.log(cart.length);
    if (cart.length === 0) {
        cartDom.innerHTML = `
        <h1> Không có sản phẩm nào trong giỏ hàng !!!</h1>
        `
    } else {
        cartDom.innerHTML = ``;
        {
            let nodeNew = document.createElement('input');
            nodeNew.type = 'checkbox'
            nodeNew.id= 'check-all';
            nodeNew.checked=true;
            cartDom.appendChild(nodeNew);
            cartDom.querySelector('#check-all').addEventListener('change',checkAllFn)
            // nodeNew.addEventListener('change',checkAllFn())

            // cartDom.innerHTML += `
            //     <input type="checkbox" id="check-all" onchange = "checkAllFn(this.checked)" checked ><label for="check-all">Chọn tất cả</label>
            //     `
        }
    }
    cart.forEach((item) => {
        let price = formatCurrencyVND(item.price);

        let nodeNew = document.createElement('div');
        nodeNew.className = 'cart-item';
        nodeNew.innerHTML = `
        <input type="checkbox" name="" ${item.checked ? 'checked' : ''}  >
        <img width="50px" src="${item.image}" alt="">
        <div class="name">${item.name}</div>
        <div class="price">${price}</div>
        <input id="item-id-${item.id}" " type="number" value="${item.quality}" min="1">
        <button onclick = "removeItem(${item.id})"><i class="fa-solid fa-trash"></i></button>
        `;
        cartDom.appendChild(nodeNew);
        console.log(item.quality)

        nodeNew.querySelector('input[type="checkbox"]').addEventListener('change', checkBox(item.id));
        nodeNew.querySelector('input[type="number"]').addEventListener('change', changeQualty(item.id, `item-id-${item.id}`));
    })

}
function changeQualty(productID, domId) {
    var indexCart;
    // tim index cua san pham x trong gio hang
    const itemInProducts = products.find(product => product.id === productID);
    var productFind = cart.find((item, index) => {
        indexCart = index;
        return item.id === productID
    });


    let inputValueDom = document.getElementById(domId);
    cart[indexCart].quality = inputValueDom.value * 1;
    updateSummary(cart);
}

function removeItem(productID) {
    // tim index cua san pham x trong gio hang
    const itemInProducts = products.find(product => product.id === productID);
    console.log(itemInProducts);
    var productFind = cart.find((item, index) => {
        indexCart = index;
        return item.id === productID
    });

    cart.splice(indexCart, 1);
    displayCart(cart);
    updateSummary(cart)
}

function updateSummary(cart) {
    sumCart = cart.reduce(((sum, value) => {
        if (value.checked) {
            return (sum + value.price * value.quality)
        }
        return sum;
    }), 0);
    console.log(sumCart);
    summaryDom.innerHTML = formatCurrencyVND(sumCart);
}

displayCart(cart);
updateSummary(cart);

function formatCurrencyVND(number) {
    const options = { style: 'currency', currency: 'VND' };
    return number.toLocaleString('vi-VN', options);
}
function checkAllFn(event) {
    console.log(cart);
    let currentCheck = event.target.checked;
    cart.forEach((item) => {
        item.checked = currentCheck;
    })
    upDateCheckboxList(currentCheck);
    updateSummary(cart);
}
function upDateCheckboxList(value) {
    let checkBoxs = document.querySelectorAll('.cart-item');
    checkBoxs.forEach((elm) => {
        elm.querySelector('input[type="checkbox"]').checked = value;
    })
}
function checkBox(productID) {
    const item = cart.find(item => item.id === productID);
    item.checked = !item.checked;
    updateSummary(cart);
}

function checkOut() {
    if (sumCart > 0) {
        alert("Mua hang thanh cong!");
    } else {
        alert("Ban chua chon san pham!")
    }
}