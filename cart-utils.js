import { CART } from './constants.js';

const emptyArray = [];

export function clearCart() {
    localStorage.removeItem(CART);
}

export function getCart() {
    const storedCart = localStorage.getItem(CART);

    if (!storedCart) {
        return emptyArray;
    } else {
        const activeCart = JSON.parse(storedCart);
        return activeCart;
    }
}

export function setCart(activeCart) {
    const stringCart = JSON.stringify(activeCart);

    localStorage.setItem(CART, stringCart);
}

export function addToCart(id, quantity) {
    const storedCart = getCart();
    let newItem = true;

    for (let item of storedCart) {
        if (id === item.id) {
            item.quantity += quantity;
            newItem = false;
        }
    }

    if (newItem) {
        storedCart.push({
            id: id,
            quantity: quantity
        });
    }

    setCart(storedCart);
}