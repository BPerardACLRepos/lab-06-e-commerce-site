export function findById(id, array) {
    for (let item of array) {
        if (id === item.id) {
            return item;
        }
    }
    return null;
}

export function calcItemTotal(item, quantity) {
    return item.price * quantity;
}

export function calcOrderTotal(cartArray, productsArray) {
    let total = 0;
    for (let cartItem of cartArray) {
        const item = findById(cartItem.id, productsArray);
        total += calcItemTotal(item, cartItem.quantity);
    }
    return total;
}