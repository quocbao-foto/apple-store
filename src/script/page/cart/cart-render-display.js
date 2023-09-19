// viet ham nhan vao (cart) xuat ra man hinh san pham trong cart
// kiem tra cart co null hay khong
// neu null hien thi mang rong
// neu co foreach qua tung mang  roi xuat
import { formatMoney, limitWords } from '/src/script/data/function-format.js'

function cartRender(cart) {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.innerHTML = '';
    if (cart.length == 0) {
        cartContainer.innerHTML = `<h1> Không có sản phẩm nào trong giỏ hàng !!!</h1> 
        <a href="../index.html" class="shopping">Tiếp tục mua sắm</a>`;
    }
    else {
        cartContainer.innerHTML = `
        <div class="cart-div">
                                <div class="cart-item-title">
                                    <div class="checkbox"></div>
                                    <div class="image">Hình ảnh</div>
                                    <div class="name">Tên sản phẩm</div>
                                    <div class="price">Giá bán</div>
                                    <div class="quantity">Số lượng</div>
                                    <div class="delect"></div>
                                </div>
                            </div>
        `
        cart.forEach((item, index) => {
            let box = itemRender(item, index);
            cartContainer.appendChild(box);
        })
    }
};

function itemRender(item, index) {
    let newElement = document.createElement('div');
    newElement.className = 'cart-div';
    newElement.id = `${index}`;
    let price = formatMoney(item.price);
    newElement.innerHTML = `
    <div class="cart-item">
                                    <div class="checkbox">
                                        <input type="checkbox" ${item.checked ? 'checked' : ''}>
                                    </div>
                                    <div class="image">
                                        <img src="${item.image}" width="100%" alt="">
                                    </div>
                                    <div class="name">
                                        <div class="name-product">${item.name}</div>
                                        <div class="product-atribute">
                                            <div class="color">Màu sắc: <div class="point" style="background-color: ${item.color}; width: 20px; height: 20px;"></div></div>
                                            <div class="option">Dung lượng: ${item.option}</div>
                                        </div>
                                    </div>
                                    <div class="price">${price}</div>
                                    <div class="quantity">
                                    <button class="minus">-</button>
                                    <input type="number" value="${item.quantity}" min="1">
                                    <button class="plus">+</button>
                                    </div>
                                    <div class="delect"><i class="fa-solid fa-trash"></i></div>
                                </div>
    `

    // gan chuc nang
    return newElement;
}



function totalRender(total) {
    document.querySelector('#summary').innerHTML = formatMoney(total);

}

export { cartRender, itemRender, totalRender };
