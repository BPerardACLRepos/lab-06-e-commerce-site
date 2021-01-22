import { CART } from './constants.js';

export function clearCart() {
    localStorage.removeItem(CART);
    return null;
}

export function getCart() {
    const storedCart = localStorage.getItem(CART);
    const emptyArray = [];

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
    return
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