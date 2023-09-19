import { products, productTypes } from "/src/script/data/data.js";
import { createProductGroup, createProductList } from "/src/script/home/product.js";

//ham lay id
function getURLParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}
const id = getURLParam('id')


// goi ham tai day



if (!!id) {
    createFilter(id)
} else {
    createFilter('lap-top');
    createFilter('i-phone');
    createFilter('i-pad');

}


//

function createRow(name, products, type) {
    createProductGroup(name, type);
    createProductList(products, type);
}

function createFilter(type) {
    let currentType = productTypes.find(value => value.type === type)
    let name = currentType.name;
    let productsFilter = products.filter((value) => {
        return value.type === type;
    })
    if (!productsFilter) return;
    createRow(name, productsFilter, type);
}


