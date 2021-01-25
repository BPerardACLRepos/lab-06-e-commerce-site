import { PRODUCTS } from '../constants.js';
import { books } from '../data/book-list.js';

export function getProducts() {
    const enteredProducts = localStorage.getItem(PRODUCTS);

    if (!enteredProducts) {
        return books;
    } else {
        return JSON.parse(enteredProducts);
    }
}

export function enterNewProduct(form) {
    const currentProducts = getProducts();

    //create new object & assign unique id
    const productTraits = {};
    const newProductId = currentProducts.length + 1;
    productTraits.id = newProductId;

    //add input key:value pairs
    const entries = form.entries();
    for (let field of entries) {
        if (field[0] === 'price') {
            productTraits[field[0]] = Number(field[1]);
        } else {
            productTraits[field[0]] = field[1];
        }
    }
    currentProducts.push(productTraits);
    const stringyProducts = JSON.stringify(currentProducts);
    localStorage.setItem(PRODUCTS, stringyProducts);
}